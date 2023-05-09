# instances

### Available Operations

* [computeInstancesAddAccessConfig](#computeinstancesaddaccessconfig) - Adds an access config to an instance's network interface.
* [computeInstancesAddResourcePolicies](#computeinstancesaddresourcepolicies) - Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.
* [computeInstancesAggregatedList](#computeinstancesaggregatedlist) - Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.
* [computeInstancesAttachDisk](#computeinstancesattachdisk) - Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.
* [computeInstancesBulkInsert](#computeinstancesbulkinsert) - Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.
* [computeInstancesDelete](#computeinstancesdelete) - Deletes the specified Instance resource. For more information, see Deleting an instance.
* [computeInstancesDeleteAccessConfig](#computeinstancesdeleteaccessconfig) - Deletes an access config from an instance's network interface.
* [computeInstancesDetachDisk](#computeinstancesdetachdisk) - Detaches a disk from an instance.
* [computeInstancesGet](#computeinstancesget) - Returns the specified Instance resource.
* [computeInstancesGetEffectiveFirewalls](#computeinstancesgeteffectivefirewalls) - Returns effective firewalls applied to an interface of the instance.
* [computeInstancesGetGuestAttributes](#computeinstancesgetguestattributes) - Returns the specified guest attributes entry.
* [computeInstancesGetIamPolicy](#computeinstancesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInstancesGetScreenshot](#computeinstancesgetscreenshot) - Returns the screenshot from the specified instance.
* [computeInstancesGetSerialPortOutput](#computeinstancesgetserialportoutput) - Returns the last 1 MB of serial port output from the specified instance.
* [computeInstancesGetShieldedInstanceIdentity](#computeinstancesgetshieldedinstanceidentity) - Returns the Shielded Instance Identity of an instance
* [computeInstancesGetShieldedVmIdentity](#computeinstancesgetshieldedvmidentity) - Returns the Shielded VM Identity of an instance
* [computeInstancesInsert](#computeinstancesinsert) - Creates an instance resource in the specified project using the data included in the request.
* [computeInstancesList](#computeinstanceslist) - Retrieves the list of instances contained within the specified zone.
* [computeInstancesListReferrers](#computeinstanceslistreferrers) - Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
* [computeInstancesPerformMaintenance](#computeinstancesperformmaintenance) - Perform a manual maintenance on the instance.
* [computeInstancesRemoveResourcePolicies](#computeinstancesremoveresourcepolicies) - Removes resource policies from an instance.
* [computeInstancesReset](#computeinstancesreset) - Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.
* [computeInstancesResume](#computeinstancesresume) - Resumes an instance that was suspended using the instances().suspend method.
* [computeInstancesSendDiagnosticInterrupt](#computeinstancessenddiagnosticinterrupt) - Sends diagnostic interrupt to the instance.
* [computeInstancesSetDeletionProtection](#computeinstancessetdeletionprotection) - Sets deletion protection on the instance.
* [computeInstancesSetDiskAutoDelete](#computeinstancessetdiskautodelete) - Sets the auto-delete flag for a disk attached to an instance.
* [computeInstancesSetIamPolicy](#computeinstancessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInstancesSetLabels](#computeinstancessetlabels) - Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
* [computeInstancesSetMachineResources](#computeinstancessetmachineresources) - Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
* [computeInstancesSetMachineType](#computeinstancessetmachinetype) - Changes the machine type for a stopped instance to the machine type specified in the request.
* [computeInstancesSetMetadata](#computeinstancessetmetadata) - Sets metadata for the specified instance to the data included in the request.
* [computeInstancesSetMinCpuPlatform](#computeinstancessetmincpuplatform) - Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.
* [computeInstancesSetName](#computeinstancessetname) - Sets name of an instance.
* [computeInstancesSetScheduling](#computeinstancessetscheduling) - Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.
* [computeInstancesSetSecurityPolicy](#computeinstancessetsecuritypolicy) - Sets the Google Cloud Armor security policy for the specified instance. For more information, see Google Cloud Armor Overview
* [computeInstancesSetServiceAccount](#computeinstancessetserviceaccount) - Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
* [computeInstancesSetShieldedInstanceIntegrityPolicy](#computeinstancessetshieldedinstanceintegritypolicy) - Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesSetShieldedVmIntegrityPolicy](#computeinstancessetshieldedvmintegritypolicy) - Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesSetTags](#computeinstancessettags) - Sets network tags for the specified instance to the data included in the request.
* [computeInstancesSimulateMaintenanceEvent](#computeinstancessimulatemaintenanceevent) - Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.
* [computeInstancesStart](#computeinstancesstart) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStartWithEncryptionKey](#computeinstancesstartwithencryptionkey) - Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.
* [computeInstancesStop](#computeinstancesstop) - Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
* [computeInstancesSuspend](#computeinstancessuspend) - This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.
* [computeInstancesTestIamPermissions](#computeinstancestestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstancesUpdate](#computeinstancesupdate) - Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.
* [computeInstancesUpdateAccessConfig](#computeinstancesupdateaccessconfig) - Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateDisplayDevice](#computeinstancesupdatedisplaydevice) - Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateNetworkInterface](#computeinstancesupdatenetworkinterface) - Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.
* [computeInstancesUpdateShieldedInstanceConfig](#computeinstancesupdateshieldedinstanceconfig) - Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInstancesUpdateShieldedVmConfig](#computeinstancesupdateshieldedvmconfig) - Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

## computeInstancesAddAccessConfig

Adds an access config to an instance's network interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesAddAccessConfigRequest;
import org.openapis.openapi.models.operations.ComputeInstancesAddAccessConfigResponse;
import org.openapis.openapi.models.operations.ComputeInstancesAddAccessConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesAddAccessConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesAddAccessConfigSecurityOption2;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.AccessConfigNetworkTierEnum;
import org.openapis.openapi.models.shared.AccessConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesAddAccessConfigRequest req = new ComputeInstancesAddAccessConfigRequest("placeat", "ratione", "magni", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "ex";
                    externalIpv6PrefixLength = 572481;
                    kind = "dignissimos";
                    name = "Patrick Macejkovic DVM";
                    natIP = "cumque";
                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                    publicDnsName = "expedita";
                    publicPtrDomainName = "odit";
                    securityPolicy = "distinctio";
                    setPublicDns = false;
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "nostrum";
                key = "repellat";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "alias";
                uploadType = "libero";
                uploadProtocol = "at";
                userIp = "quasi";
            }};            

            ComputeInstancesAddAccessConfigResponse res = sdk.instances.computeInstancesAddAccessConfig(req, new ComputeInstancesAddAccessConfigSecurity() {{
                option1 = new ComputeInstancesAddAccessConfigSecurityOption1("nihil", "blanditiis") {{
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

## computeInstancesAddResourcePolicies

Adds existing resource policies to an instance. You can only add one policy right now which will be applied to this instance for scheduling live migrations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesAddResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeInstancesAddResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeInstancesAddResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesAddResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesAddResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesAddResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesAddResourcePoliciesRequest req = new ComputeInstancesAddResourcePoliciesRequest("numquam", "blanditiis", "sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesAddResourcePoliciesRequest = new InstancesAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("exercitationem"),
                        add("dolor"),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "harum";
                fields = "amet";
                key = "tempore";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "vero";
                requestId = "odit";
                uploadType = "quaerat";
                uploadProtocol = "dicta";
                userIp = "quisquam";
            }};            

            ComputeInstancesAddResourcePoliciesResponse res = sdk.instances.computeInstancesAddResourcePolicies(req, new ComputeInstancesAddResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesAddResourcePoliciesSecurityOption1("adipisci", "quasi") {{
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

## computeInstancesAggregatedList

Retrieves an aggregated list of all of the instances in your project across all regions and zones. The performance of this method degrades when a filter is specified on a project that has a very large number of instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesAggregatedListRequest req = new ComputeInstancesAggregatedListRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "eum";
                filter = "eum";
                includeAllScopes = false;
                key = "dolorem";
                maxResults = 808629L;
                oauthToken = "vel";
                orderBy = "commodi";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "cumque";
                returnPartialSuccess = false;
                uploadType = "libero";
                uploadProtocol = "expedita";
                userIp = "reprehenderit";
            }};            

            ComputeInstancesAggregatedListResponse res = sdk.instances.computeInstancesAggregatedList(req, new ComputeInstancesAggregatedListSecurity() {{
                option1 = new ComputeInstancesAggregatedListSecurityOption1("nulla", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesAttachDisk

Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesAttachDiskRequest;
import org.openapis.openapi.models.operations.ComputeInstancesAttachDiskResponse;
import org.openapis.openapi.models.operations.ComputeInstancesAttachDiskSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesAttachDiskSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesAttachDiskSecurityOption2;
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
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesAttachDiskRequest req = new ComputeInstancesAttachDiskRequest("aliquid", "porro", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                attachedDisk = new AttachedDisk() {{
                    architecture = AttachedDiskArchitectureEnum.ARM64;
                    autoDelete = false;
                    boot = false;
                    deviceName = "nobis";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "totam";
                        kmsKeyServiceAccount = "distinctio";
                        rawKey = "modi";
                        rsaEncryptedKey = "aperiam";
                        sha256 = "praesentium";
                    }};;
                    diskSizeGb = "recusandae";
                    forceAttach = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                    }};
                    index = 115455;
                    initializeParams = new AttachedDiskInitializeParams() {{
                        architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                        description = "molestiae";
                        diskName = "in";
                        diskSizeGb = "magnam";
                        diskType = "repellendus";
                        guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                            add(new GuestOsFeature() {{
                                type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                            }}),
                            add(new GuestOsFeature() {{
                                type = GuestOsFeatureTypeEnum.WINDOWS;
                            }}),
                            add(new GuestOsFeature() {{
                                type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                            }}),
                            add(new GuestOsFeature() {{
                                type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                            }}),
                        }};
                        interface_ = AttachedDiskInitializeParamsInterfaceEnum.NVME;
                        labels = new java.util.HashMap<String, String>() {{
                            put("et", "possimus");
                        }};
                        licenseCodes = new String[]{{
                            add("esse"),
                            add("praesentium"),
                            add("aperiam"),
                        }};
                        licenses = new String[]{{
                            add("dicta"),
                            add("doloremque"),
                            add("minus"),
                        }};
                        multiWriter = false;
                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                        provisionedIops = "odio";
                        provisionedThroughput = "rerum";
                        replicaZones = new String[]{{
                            add("nostrum"),
                            add("perferendis"),
                            add("aliquam"),
                        }};
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("possimus", "vel");
                        }};
                        resourcePolicies = new String[]{{
                            add("blanditiis"),
                            add("soluta"),
                            add("quia"),
                            add("similique"),
                        }};
                        sourceImage = "ipsam";
                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "a";
                            kmsKeyServiceAccount = "alias";
                            rawKey = "perferendis";
                            rsaEncryptedKey = "aspernatur";
                            sha256 = "sed";
                        }};;
                        sourceInstantSnapshot = "sit";
                        sourceSnapshot = "esse";
                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "accusamus";
                            kmsKeyServiceAccount = "ut";
                            rawKey = "quae";
                            rsaEncryptedKey = "dolore";
                            sha256 = "molestias";
                        }};;
                        storagePool = "maiores";
                    }};;
                    interface_ = AttachedDiskInterfaceEnum.NVME;
                    kind = "aperiam";
                    licenses = new String[]{{
                        add("sit"),
                    }};
                    locked = false;
                    mode = AttachedDiskModeEnum.READ_WRITE;
                    savedState = AttachedDiskSavedStateEnum.PRESERVED;
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "consequuntur";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "doloremque";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "esse";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "accusamus";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "fuga";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "iste";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "ut";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "iure";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "recusandae";
                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                        }};;
                    }};;
                    source = "sunt";
                    type = AttachedDiskTypeEnum.PERSISTENT;
                    userLicenses = new String[]{{
                        add("alias"),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "rerum";
                forceAttach = false;
                key = "eos";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "cupiditate";
                uploadType = "distinctio";
                uploadProtocol = "omnis";
                userIp = "consequuntur";
            }};            

            ComputeInstancesAttachDiskResponse res = sdk.instances.computeInstancesAttachDisk(req, new ComputeInstancesAttachDiskSecurity() {{
                option1 = new ComputeInstancesAttachDiskSecurityOption1("tempora", "voluptate") {{
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

## computeInstancesBulkInsert

Creates multiple instances. Count specifies the number of instances to create. For more information, see About bulk creation of VMs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesBulkInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstancesBulkInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstancesBulkInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesBulkInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesBulkInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesBulkInsertRequest req = new ComputeInstancesBulkInsertRequest("odio", "dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "nemo";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            numaNodeCount = 384787;
                            performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ENHANCED;
                            threadsPerCore = 609975;
                            visibleCoreCount = 912986;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.SEV;
                            enableConfidentialCompute = false;
                        }};;
                        description = "facilis";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "porro";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "dignissimos";
                                    kmsKeyServiceAccount = "nisi";
                                    rawKey = "magni";
                                    rsaEncryptedKey = "iure";
                                    sha256 = "ea";
                                }};
                                diskSizeGb = "labore";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                }};
                                index = 896306;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "provident";
                                    diskName = "recusandae";
                                    diskSizeGb = "numquam";
                                    diskType = "cumque";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("sit", "expedita");
                                        put("rem", "deleniti");
                                        put("repellat", "harum");
                                        put("atque", "iure");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("aliquid"),
                                        add("asperiores"),
                                        add("similique"),
                                        add("veniam"),
                                    }};
                                    licenses = new String[]{{
                                        add("vel"),
                                        add("earum"),
                                        add("corrupti"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                    provisionedIops = "libero";
                                    provisionedThroughput = "sapiente";
                                    replicaZones = new String[]{{
                                        add("dicta"),
                                        add("qui"),
                                        add("asperiores"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("nesciunt", "nam");
                                        put("inventore", "eligendi");
                                        put("animi", "autem");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("omnis"),
                                        add("voluptatibus"),
                                        add("asperiores"),
                                    }};
                                    sourceImage = "impedit";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "quis";
                                        kmsKeyServiceAccount = "nisi";
                                        rawKey = "vitae";
                                        rsaEncryptedKey = "unde";
                                        sha256 = "odit";
                                    }};
                                    sourceInstantSnapshot = "omnis";
                                    sourceSnapshot = "placeat";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "cumque";
                                        kmsKeyServiceAccount = "officia";
                                        rawKey = "occaecati";
                                        rsaEncryptedKey = "nemo";
                                        sha256 = "laboriosam";
                                    }};
                                    storagePool = "eaque";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "quasi";
                                licenses = new String[]{{
                                    add("occaecati"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "quas";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "ab";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "magnam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "recusandae";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "officiis";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "quisquam";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "praesentium";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "inventore";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "dolore";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("officia"),
                                    add("natus"),
                                    add("nesciunt"),
                                    add("eaque"),
                                }};
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "nobis";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "magni";
                                    kmsKeyServiceAccount = "nihil";
                                    rawKey = "laborum";
                                    rsaEncryptedKey = "aut";
                                    sha256 = "voluptatum";
                                }};
                                diskSizeGb = "animi";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 263325;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "amet";
                                    diskName = "iste";
                                    diskSizeGb = "libero";
                                    diskType = "nesciunt";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.WINDOWS;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                        }}),
                                    }};
                                    interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("quisquam", "optio");
                                        put("eveniet", "incidunt");
                                        put("dignissimos", "accusantium");
                                        put("impedit", "fugiat");
                                    }};
                                    licenseCodes = new String[]{{
                                        add("veritatis"),
                                    }};
                                    licenses = new String[]{{
                                        add("reprehenderit"),
                                        add("quidem"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "recusandae";
                                    provisionedThroughput = "suscipit";
                                    replicaZones = new String[]{{
                                        add("ipsam"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("placeat", "voluptatibus");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("et"),
                                    }};
                                    sourceImage = "quibusdam";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "doloremque";
                                        kmsKeyServiceAccount = "vero";
                                        rawKey = "voluptatum";
                                        rsaEncryptedKey = "eligendi";
                                        sha256 = "dolor";
                                    }};
                                    sourceInstantSnapshot = "culpa";
                                    sourceSnapshot = "magnam";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "facilis";
                                        kmsKeyServiceAccount = "natus";
                                        rawKey = "laborum";
                                        rsaEncryptedKey = "exercitationem";
                                        sha256 = "quidem";
                                    }};
                                    storagePool = "repellat";
                                }};
                                interface_ = AttachedDiskInterfaceEnum.NVME;
                                kind = "amet";
                                licenses = new String[]{{
                                    add("pariatur"),
                                    add("voluptatibus"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                savedState = AttachedDiskSavedStateEnum.PRESERVED;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "incidunt";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "similique";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "et";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "excepturi";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "consequatur";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "accusamus";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "animi";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "fugit";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "magnam";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("voluptates"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 662213;
                                acceleratorType = "unde";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("quam", "recusandae");
                        }};
                        machineType = "iste";
                        metadata = new Metadata() {{
                            fingerprint = "cupiditate";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "numquam";
                                    value = "porro";
                                }}),
                                add(new MetadataItems() {{
                                    key = "quas";
                                    value = "consequatur";
                                }}),
                                add(new MetadataItems() {{
                                    key = "facilis";
                                    value = "ut";
                                }}),
                            }};
                            kind = "nihil";
                        }};;
                        minCpuPlatform = "sint";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "excepturi";
                                        externalIpv6PrefixLength = 104080;
                                        kind = "molestias";
                                        name = "Ms. Connie Romaguera";
                                        natIP = "officia";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "facere";
                                        publicPtrDomainName = "vel";
                                        securityPolicy = "cupiditate";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "enim";
                                        externalIpv6PrefixLength = 401448;
                                        kind = "rem";
                                        name = "Benjamin Bruen";
                                        natIP = "animi";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "doloremque";
                                        publicPtrDomainName = "magni";
                                        securityPolicy = "alias";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "officiis";
                                        externalIpv6PrefixLength = 258598;
                                        kind = "delectus";
                                        name = "Bert Ankunding";
                                        natIP = "eligendi";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "esse";
                                        publicPtrDomainName = "tenetur";
                                        securityPolicy = "ab";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "ratione";
                                        subnetworkRangeName = "placeat";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "est";
                                        subnetworkRangeName = "nam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "dolorum";
                                        subnetworkRangeName = "repellat";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "dignissimos";
                                        subnetworkRangeName = "asperiores";
                                    }}),
                                }};
                                fingerprint = "optio";
                                internalIpv6PrefixLength = 179420;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "minus";
                                        externalIpv6PrefixLength = 705121;
                                        kind = "id";
                                        name = "Jeannette Walter PhD";
                                        natIP = "reiciendis";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "voluptatum";
                                        publicPtrDomainName = "earum";
                                        securityPolicy = "mollitia";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "repellendus";
                                        externalIpv6PrefixLength = 706234;
                                        kind = "consequuntur";
                                        name = "Miss Terence Koepp";
                                        natIP = "alias";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "excepturi";
                                        publicPtrDomainName = "repellat";
                                        securityPolicy = "nam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "suscipit";
                                        externalIpv6PrefixLength = 665983;
                                        kind = "pariatur";
                                        name = "Darren Bahringer V";
                                        natIP = "accusantium";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "consequatur";
                                        publicPtrDomainName = "fuga";
                                        securityPolicy = "dolorem";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "maxime";
                                        externalIpv6PrefixLength = 447619;
                                        kind = "dolor";
                                        name = "Mrs. Derrick Murphy";
                                        natIP = "soluta";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "ab";
                                        publicPtrDomainName = "ut";
                                        securityPolicy = "sint";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "eius";
                                kind = "ratione";
                                name = "Emilio O'Keefe";
                                network = "totam";
                                networkAttachment = "in";
                                networkIP = "est";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "ducimus";
                                queueCount = 147085;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "sit";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "dolorum";
                                        vlan = 114685;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "minima";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "accusamus";
                                        vlan = 179101;
                                    }}),
                                }};
                                subnetwork = "fugit";
                                vlan = 230307;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dicta";
                                        externalIpv6PrefixLength = 60951;
                                        kind = "autem";
                                        name = "Tommy Emard";
                                        natIP = "saepe";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "perspiciatis";
                                        publicPtrDomainName = "consectetur";
                                        securityPolicy = "eos";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "aperiam";
                                        subnetworkRangeName = "animi";
                                    }}),
                                }};
                                fingerprint = "quisquam";
                                internalIpv6PrefixLength = 819824;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ad";
                                        externalIpv6PrefixLength = 842759;
                                        kind = "praesentium";
                                        name = "Ms. Wilson Erdman";
                                        natIP = "esse";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "nisi";
                                        publicPtrDomainName = "libero";
                                        securityPolicy = "dolorem";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "ducimus";
                                kind = "harum";
                                name = "Jeremy Ankunding";
                                network = "quae";
                                networkAttachment = "doloribus";
                                networkIP = "ipsum";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "accusantium";
                                queueCount = 723159;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "ex";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "voluptas";
                                        vlan = 444102;
                                    }}),
                                }};
                                subnetwork = "odio";
                                vlan = 676892;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "praesentium";
                                        externalIpv6PrefixLength = 360333;
                                        kind = "inventore";
                                        name = "Israel Fahey";
                                        natIP = "incidunt";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "voluptatem";
                                        publicPtrDomainName = "odit";
                                        securityPolicy = "quas";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "deleniti";
                                        externalIpv6PrefixLength = 552212;
                                        kind = "qui";
                                        name = "Mrs. Candice Rau";
                                        natIP = "nihil";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "possimus";
                                        publicPtrDomainName = "consequuntur";
                                        securityPolicy = "odit";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "dolore";
                                        subnetworkRangeName = "in";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "corrupti";
                                        subnetworkRangeName = "iusto";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "architecto";
                                        subnetworkRangeName = "culpa";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "blanditiis";
                                        subnetworkRangeName = "atque";
                                    }}),
                                }};
                                fingerprint = "necessitatibus";
                                internalIpv6PrefixLength = 823250;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "qui";
                                        externalIpv6PrefixLength = 675534;
                                        kind = "explicabo";
                                        name = "Ray Orn";
                                        natIP = "quasi";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicDnsName = "voluptatum";
                                        publicPtrDomainName = "id";
                                        securityPolicy = "impedit";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "repellendus";
                                        externalIpv6PrefixLength = 43567;
                                        kind = "sapiente";
                                        name = "Jaime Hickle";
                                        natIP = "adipisci";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicDnsName = "totam";
                                        publicPtrDomainName = "in";
                                        securityPolicy = "tempore";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "eaque";
                                kind = "tempora";
                                name = "Elena Anderson";
                                network = "quos";
                                networkAttachment = "necessitatibus";
                                networkIP = "unde";
                                nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                                parentNicName = "laudantium";
                                queueCount = 176520;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "officiis";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "alias";
                                        vlan = 394613;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "voluptatibus";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                        subnetwork = "nostrum";
                                        vlan = 474190;
                                    }}),
                                }};
                                subnetwork = "aliquid";
                                vlan = 981922;
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "quisquam";
                                        externalIpv6PrefixLength = 844364;
                                        kind = "voluptates";
                                        name = "Robert Daugherty";
                                        natIP = "pariatur";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "distinctio";
                                        publicPtrDomainName = "maxime";
                                        securityPolicy = "aliquam";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "harum";
                                        externalIpv6PrefixLength = 83016;
                                        kind = "quas";
                                        name = "Malcolm Erdman";
                                        natIP = "sapiente";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "asperiores";
                                        publicPtrDomainName = "quisquam";
                                        securityPolicy = "maiores";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "beatae";
                                        subnetworkRangeName = "assumenda";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "quibusdam";
                                        subnetworkRangeName = "hic";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "dignissimos";
                                        subnetworkRangeName = "vero";
                                    }}),
                                }};
                                fingerprint = "eaque";
                                internalIpv6PrefixLength = 534764;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "repellat";
                                        externalIpv6PrefixLength = 481923;
                                        kind = "labore";
                                        name = "Brendan Heaney";
                                        natIP = "sint";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicDnsName = "ab";
                                        publicPtrDomainName = "laboriosam";
                                        securityPolicy = "vero";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "unde";
                                        externalIpv6PrefixLength = 181522;
                                        kind = "aliquid";
                                        name = "Anna Franecki";
                                        natIP = "eum";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicDnsName = "quo";
                                        publicPtrDomainName = "explicabo";
                                        securityPolicy = "quo";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "illum";
                                        externalIpv6PrefixLength = 147103;
                                        kind = "reprehenderit";
                                        name = "Stephanie Batz";
                                        natIP = "quidem";
                                        networkTier = AccessConfigNetworkTierEnum.SELECT;
                                        publicDnsName = "autem";
                                        publicPtrDomainName = "id";
                                        securityPolicy = "fugiat";
                                        setPublicDns = false;
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "amet";
                                kind = "recusandae";
                                name = "Freda Marquardt";
                                network = "libero";
                                networkAttachment = "voluptas";
                                networkIP = "aliquid";
                                nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                                parentNicName = "nesciunt";
                                queueCount = 249042;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "dicta";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "id";
                                        vlan = 661356;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "ab";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                        subnetwork = "ipsam";
                                        vlan = 869369;
                                    }}),
                                    add(new NetworkInterfaceSubInterface() {{
                                        ipAddress = "magni";
                                        ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                        subnetwork = "modi";
                                        vlan = 467333;
                                    }}),
                                }};
                                subnetwork = "assumenda";
                                vlan = 894564;
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.NOOP;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.INHERIT_FROM_SUBNETWORK;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.NO_RESERVATION;
                            key = "laboriosam";
                            values = new String[]{{
                                add("ducimus"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("debitis", "iusto");
                        }};
                        resourcePolicies = new String[]{{
                            add("quos"),
                            add("est"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            availabilityDomain = 596846;
                            currentCpus = 424591;
                            currentMemoryMb = "nobis";
                            hostErrorTimeoutSeconds = 708007;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                            latencyTolerant = false;
                            localSsdRecoveryTimeout = new Duration() {{
                                nanos = 613225;
                                seconds = "totam";
                            }};;
                            locationHint = "reprehenderit";
                            maintenanceFreezeDurationHours = 532481;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 197593;
                                seconds = "perspiciatis";
                            }};;
                            minNodeCpus = 523191;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "tempore";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("expedita"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "cum";
                                    operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                    values = new String[]{{
                                        add("ab"),
                                        add("dolore"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "ratione";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("ex"),
                                        add("tenetur"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "aliquid";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("molestias"),
                                        add("id"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                            terminationTime = "tempora";
                        }};;
                        secureTags = new String[]{{
                            add("incidunt"),
                        }};
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Chandler75@hotmail.com";
                                scopes = new String[]{{
                                    add("aliquam"),
                                    add("ex"),
                                    add("tempore"),
                                    add("iste"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Art12@yahoo.com";
                                scopes = new String[]{{
                                    add("beatae"),
                                    add("corporis"),
                                    add("atque"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Lourdes25@hotmail.com";
                                scopes = new String[]{{
                                    add("reiciendis"),
                                }};
                            }}),
                        }};
                        serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                            put("veniam", new ServiceIntegrationSpec() {{
                                backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                    plan = "consequuntur";
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
                            fingerprint = "iure";
                            items = new String[]{{
                                add("quia"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("sequi", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 65214;
                                }};
                                names = new String[]{{
                                    add("harum"),
                                    add("at"),
                                    add("ex"),
                                    add("unde"),
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                            }});
                            put("a", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 982330;
                                }};
                                names = new String[]{{
                                    add("blanditiis"),
                                    add("reprehenderit"),
                                    add("dolore"),
                                    add("nostrum"),
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                            }});
                            put("alias", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 314321;
                                }};
                                names = new String[]{{
                                    add("iste"),
                                    add("pariatur"),
                                    add("velit"),
                                    add("temporibus"),
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.ANY;
                    }};;
                    minCount = "incidunt";
                    namePattern = "vero";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("non", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            hostname = "immaterial-violation.info";
                            name = "Lee Luettgen";
                        }});
                    }};
                    sourceInstanceTemplate = "laboriosam";
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "error";
                key = "laudantium";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "ipsum";
                uploadType = "perferendis";
                uploadProtocol = "est";
                userIp = "fugit";
            }};            

            ComputeInstancesBulkInsertResponse res = sdk.instances.computeInstancesBulkInsert(req, new ComputeInstancesBulkInsertSecurity() {{
                option1 = new ComputeInstancesBulkInsertSecurityOption1("repudiandae", "sed") {{
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

## computeInstancesDelete

Deletes the specified Instance resource. For more information, see Deleting an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesDeleteRequest req = new ComputeInstancesDeleteRequest("similique", "repudiandae", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "atque";
                key = "ea";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "eos";
                uploadType = "praesentium";
                uploadProtocol = "illum";
                userIp = "eaque";
            }};            

            ComputeInstancesDeleteResponse res = sdk.instances.computeInstancesDelete(req, new ComputeInstancesDeleteSecurity() {{
                option1 = new ComputeInstancesDeleteSecurityOption1("incidunt", "aut") {{
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

## computeInstancesDeleteAccessConfig

Deletes an access config from an instance's network interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteAccessConfigRequest;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteAccessConfigResponse;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteAccessConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteAccessConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesDeleteAccessConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesDeleteAccessConfigRequest req = new ComputeInstancesDeleteAccessConfigRequest("eligendi", "vel", "perspiciatis", "id", "amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "hic";
                key = "ea";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "at";
                uploadType = "nostrum";
                uploadProtocol = "officia";
                userIp = "fugiat";
            }};            

            ComputeInstancesDeleteAccessConfigResponse res = sdk.instances.computeInstancesDeleteAccessConfig(req, new ComputeInstancesDeleteAccessConfigSecurity() {{
                option1 = new ComputeInstancesDeleteAccessConfigSecurityOption1("quam", "vero") {{
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

## computeInstancesDetachDisk

Detaches a disk from an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesDetachDiskRequest;
import org.openapis.openapi.models.operations.ComputeInstancesDetachDiskResponse;
import org.openapis.openapi.models.operations.ComputeInstancesDetachDiskSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesDetachDiskSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesDetachDiskSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesDetachDiskRequest req = new ComputeInstancesDetachDiskRequest("maxime", "dignissimos", "neque", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "repellat";
                key = "ex";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "rerum";
                uploadType = "ratione";
                uploadProtocol = "quam";
                userIp = "dolorem";
            }};            

            ComputeInstancesDetachDiskResponse res = sdk.instances.computeInstancesDetachDisk(req, new ComputeInstancesDetachDiskSecurity() {{
                option1 = new ComputeInstancesDetachDiskSecurityOption1("accusantium", "ducimus") {{
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

## computeInstancesGet

Returns the specified Instance resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetRequest req = new ComputeInstancesGetRequest("inventore", "numquam", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "minus";
                key = "dolorem";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "perspiciatis";
                uploadProtocol = "impedit";
                userIp = "vel";
            }};            

            ComputeInstancesGetResponse res = sdk.instances.computeInstancesGet(req, new ComputeInstancesGetSecurity() {{
                option1 = new ComputeInstancesGetSecurityOption1("quaerat", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetEffectiveFirewalls

Returns effective firewalls applied to an interface of the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetEffectiveFirewallsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetEffectiveFirewallsRequest req = new ComputeInstancesGetEffectiveFirewallsRequest("dolorem", "aliquam", "dolores", "dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "officia";
                key = "aliquid";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "debitis";
                uploadProtocol = "quam";
                userIp = "dolorum";
            }};            

            ComputeInstancesGetEffectiveFirewallsResponse res = sdk.instances.computeInstancesGetEffectiveFirewalls(req, new ComputeInstancesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeInstancesGetEffectiveFirewallsSecurityOption1("earum", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instancesGetEffectiveFirewallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetGuestAttributes

Returns the specified guest attributes entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetGuestAttributesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetGuestAttributesRequest req = new ComputeInstancesGetGuestAttributesRequest("inventore", "amet", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "modi";
                key = "ullam";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                queryPath = "nemo";
                quotaUser = "dolor";
                uploadType = "quam";
                uploadProtocol = "incidunt";
                userIp = "consectetur";
                variableKey = "eveniet";
            }};            

            ComputeInstancesGetGuestAttributesResponse res = sdk.instances.computeInstancesGetGuestAttributes(req, new ComputeInstancesGetGuestAttributesSecurity() {{
                option1 = new ComputeInstancesGetGuestAttributesSecurityOption1("hic", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.guestAttributes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetIamPolicyRequest req = new ComputeInstancesGetIamPolicyRequest("repudiandae", "quasi", "quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "illo";
                key = "repellat";
                oauthToken = "iste";
                optionsRequestedPolicyVersion = 730646L;
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "tenetur";
                uploadProtocol = "nihil";
                userIp = "fugiat";
            }};            

            ComputeInstancesGetIamPolicyResponse res = sdk.instances.computeInstancesGetIamPolicy(req, new ComputeInstancesGetIamPolicySecurity() {{
                option1 = new ComputeInstancesGetIamPolicySecurityOption1("iste", "deserunt") {{
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

## computeInstancesGetScreenshot

Returns the screenshot from the specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetScreenshotSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetScreenshotRequest req = new ComputeInstancesGetScreenshotRequest("earum", "a", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "sed";
                key = "mollitia";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "recusandae";
                uploadProtocol = "asperiores";
                userIp = "cum";
            }};            

            ComputeInstancesGetScreenshotResponse res = sdk.instances.computeInstancesGetScreenshot(req, new ComputeInstancesGetScreenshotSecurity() {{
                option1 = new ComputeInstancesGetScreenshotSecurityOption1("accusantium", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.screenshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetSerialPortOutput

Returns the last 1 MB of serial port output from the specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetSerialPortOutputSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetSerialPortOutputRequest req = new ComputeInstancesGetSerialPortOutputRequest("reiciendis", "voluptatum", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "animi";
                key = "id";
                oauthToken = "nam";
                port = 905738L;
                prettyPrint = false;
                quotaUser = "mollitia";
                start = "esse";
                uploadType = "voluptatem";
                uploadProtocol = "blanditiis";
                userIp = "voluptates";
            }};            

            ComputeInstancesGetSerialPortOutputResponse res = sdk.instances.computeInstancesGetSerialPortOutput(req, new ComputeInstancesGetSerialPortOutputSecurity() {{
                option1 = new ComputeInstancesGetSerialPortOutputSecurityOption1("temporibus", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serialPortOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetShieldedInstanceIdentity

Returns the Shielded Instance Identity of an instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentityRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentityResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentitySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentitySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentitySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedInstanceIdentitySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetShieldedInstanceIdentityRequest req = new ComputeInstancesGetShieldedInstanceIdentityRequest("odio", "iste", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "illum";
                key = "labore";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "ullam";
                uploadProtocol = "cupiditate";
                userIp = "omnis";
            }};            

            ComputeInstancesGetShieldedInstanceIdentityResponse res = sdk.instances.computeInstancesGetShieldedInstanceIdentity(req, new ComputeInstancesGetShieldedInstanceIdentitySecurity() {{
                option1 = new ComputeInstancesGetShieldedInstanceIdentitySecurityOption1("quibusdam", "nostrum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.shieldedInstanceIdentity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesGetShieldedVmIdentity

Returns the Shielded VM Identity of an instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentityRequest;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentityResponse;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentitySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentitySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentitySecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesGetShieldedVmIdentitySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesGetShieldedVmIdentityRequest req = new ComputeInstancesGetShieldedVmIdentityRequest("impedit", "nesciunt", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eum";
                key = "facere";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "dolores";
                uploadProtocol = "accusantium";
                userIp = "error";
            }};            

            ComputeInstancesGetShieldedVmIdentityResponse res = sdk.instances.computeInstancesGetShieldedVmIdentity(req, new ComputeInstancesGetShieldedVmIdentitySecurity() {{
                option1 = new ComputeInstancesGetShieldedVmIdentitySecurityOption1("officiis", "perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.shieldedVmIdentity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesInsert

Creates an instance resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesInsertRequest;
import org.openapis.openapi.models.operations.ComputeInstancesInsertResponse;
import org.openapis.openapi.models.operations.ComputeInstancesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesInsertSecurityOption2;
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
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.InstanceKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstanceParams;
import org.openapis.openapi.models.shared.InstancePostKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceStatusEnum;
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
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceStatusScheduling;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatus;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatusBackupDRStatus;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum;
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
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.ShieldedVmIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.UpcomingMaintenance;
import org.openapis.openapi.models.shared.UpcomingMaintenanceMaintenanceStatusEnum;
import org.openapis.openapi.models.shared.UpcomingMaintenanceTimeWindow;
import org.openapis.openapi.models.shared.UpcomingMaintenanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesInsertRequest req = new ComputeInstancesInsertRequest("est", "eos") {{
                dollarXgafv = XgafvEnum.ONE;
                instance = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        numaNodeCount = 357941;
                        performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ARCHITECTURAL;
                        threadsPerCore = 705826;
                        visibleCoreCount = 398200;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.TDX;
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "molestiae";
                    creationTimestamp = "nisi";
                    deletionProtection = false;
                    description = "veniam";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARM64;
                            autoDelete = false;
                            boot = false;
                            deviceName = "aliquid";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "debitis";
                                kmsKeyServiceAccount = "earum";
                                rawKey = "similique";
                                rsaEncryptedKey = "officiis";
                                sha256 = "ipsam";
                            }};
                            diskSizeGb = "sapiente";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.GVNIC;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                }}),
                            }};
                            index = 975247;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "mollitia";
                                diskName = "veritatis";
                                diskSizeGb = "eius";
                                diskType = "provident";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                }};
                                interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "sunt");
                                    put("dolor", "quisquam");
                                    put("commodi", "laudantium");
                                }};
                                licenseCodes = new String[]{{
                                    add("repellendus"),
                                    add("quos"),
                                }};
                                licenses = new String[]{{
                                    add("omnis"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "eligendi";
                                provisionedThroughput = "occaecati";
                                replicaZones = new String[]{{
                                    add("illo"),
                                    add("esse"),
                                    add("enim"),
                                    add("reiciendis"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("similique", "iste");
                                    put("consequatur", "autem");
                                    put("similique", "voluptates");
                                    put("enim", "corporis");
                                }};
                                resourcePolicies = new String[]{{
                                    add("soluta"),
                                    add("nihil"),
                                    add("fugit"),
                                }};
                                sourceImage = "debitis";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quidem";
                                    kmsKeyServiceAccount = "vel";
                                    rawKey = "dignissimos";
                                    rsaEncryptedKey = "magnam";
                                    sha256 = "vel";
                                }};
                                sourceInstantSnapshot = "accusantium";
                                sourceSnapshot = "consectetur";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "sit";
                                    kmsKeyServiceAccount = "doloribus";
                                    rawKey = "accusamus";
                                    rsaEncryptedKey = "sunt";
                                    sha256 = "molestias";
                                }};
                                storagePool = "neque";
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "voluptas";
                            licenses = new String[]{{
                                add("explicabo"),
                                add("expedita"),
                                add("earum"),
                                add("at"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            savedState = AttachedDiskSavedStateEnum.PRESERVED;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "aliquid";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "perspiciatis";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "temporibus";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "porro";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "nisi";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "molestiae";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "dolore";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "rem";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "alias";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "ut";
                                    fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                }};
                            }};
                            source = "unde";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("dignissimos"),
                                add("dignissimos"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            autoDelete = false;
                            boot = false;
                            deviceName = "itaque";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "earum";
                                kmsKeyServiceAccount = "ipsa";
                                rawKey = "aliquam";
                                rsaEncryptedKey = "praesentium";
                                sha256 = "doloremque";
                            }};
                            diskSizeGb = "occaecati";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                }}),
                            }};
                            index = 171134;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                description = "culpa";
                                diskName = "fugit";
                                diskSizeGb = "nemo";
                                diskType = "repudiandae";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                }};
                                interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("voluptatum", "est");
                                    put("autem", "perferendis");
                                    put("laborum", "quam");
                                    put("laborum", "eveniet");
                                }};
                                licenseCodes = new String[]{{
                                    add("dolore"),
                                }};
                                licenses = new String[]{{
                                    add("recusandae"),
                                    add("perferendis"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                provisionedIops = "esse";
                                provisionedThroughput = "cupiditate";
                                replicaZones = new String[]{{
                                    add("nemo"),
                                    add("officia"),
                                    add("sapiente"),
                                    add("debitis"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("consequatur", "culpa");
                                    put("impedit", "culpa");
                                }};
                                resourcePolicies = new String[]{{
                                    add("deserunt"),
                                    add("nisi"),
                                    add("aliquam"),
                                    add("nemo"),
                                }};
                                sourceImage = "pariatur";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "repudiandae";
                                    kmsKeyServiceAccount = "perspiciatis";
                                    rawKey = "atque";
                                    rsaEncryptedKey = "laboriosam";
                                    sha256 = "voluptate";
                                }};
                                sourceInstantSnapshot = "ad";
                                sourceSnapshot = "veniam";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "vitae";
                                    kmsKeyServiceAccount = "deserunt";
                                    rawKey = "iste";
                                    rsaEncryptedKey = "porro";
                                    sha256 = "porro";
                                }};
                                storagePool = "eveniet";
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "quae";
                            licenses = new String[]{{
                                add("impedit"),
                                add("sunt"),
                                add("optio"),
                                add("odio"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            savedState = AttachedDiskSavedStateEnum.PRESERVED;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "excepturi";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "ipsam";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "magnam";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "nemo";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "laboriosam";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "tempora";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "exercitationem";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ea";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "assumenda";
                                    fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                }};
                            }};
                            source = "expedita";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                            userLicenses = new String[]{{
                                add("excepturi"),
                                add("recusandae"),
                                add("eos"),
                                add("facere"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARM64;
                            autoDelete = false;
                            boot = false;
                            deviceName = "delectus";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "quod";
                                kmsKeyServiceAccount = "tenetur";
                                rawKey = "veniam";
                                rsaEncryptedKey = "ad";
                                sha256 = "esse";
                            }};
                            diskSizeGb = "nisi";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                }}),
                            }};
                            index = 861197;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                description = "corrupti";
                                diskName = "quam";
                                diskSizeGb = "ad";
                                diskType = "quisquam";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                interface_ = AttachedDiskInitializeParamsInterfaceEnum.SCSI;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sit", "fugit");
                                    put("deleniti", "dolores");
                                    put("est", "enim");
                                }};
                                licenseCodes = new String[]{{
                                    add("delectus"),
                                }};
                                licenses = new String[]{{
                                    add("illo"),
                                    add("optio"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "iure";
                                provisionedThroughput = "molestiae";
                                replicaZones = new String[]{{
                                    add("iure"),
                                    add("necessitatibus"),
                                    add("illum"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("repellendus", "nihil");
                                }};
                                resourcePolicies = new String[]{{
                                    add("numquam"),
                                }};
                                sourceImage = "placeat";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "ab";
                                    kmsKeyServiceAccount = "praesentium";
                                    rawKey = "repellat";
                                    rsaEncryptedKey = "ad";
                                    sha256 = "rem";
                                }};
                                sourceInstantSnapshot = "beatae";
                                sourceSnapshot = "necessitatibus";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "provident";
                                    kmsKeyServiceAccount = "laudantium";
                                    rawKey = "porro";
                                    rsaEncryptedKey = "minus";
                                    sha256 = "officiis";
                                }};
                                storagePool = "consectetur";
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "esse";
                            licenses = new String[]{{
                                add("autem"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            savedState = AttachedDiskSavedStateEnum.DISK_SAVED_STATE_UNSPECIFIED;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "possimus";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "officiis";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "deserunt";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "veritatis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ex";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "earum";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "sint";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("minima"),
                                add("explicabo"),
                                add("soluta"),
                            }};
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    eraseWindowsVssSignature = false;
                    fingerprint = "ad";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 699802;
                            acceleratorType = "nesciunt";
                        }}),
                    }};
                    hostname = "defensive-situation.name";
                    id = "cumque";
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "dignissimos";
                        kmsKeyServiceAccount = "placeat";
                        rawKey = "ratione";
                        rsaEncryptedKey = "eligendi";
                        sha256 = "esse";
                    }};;
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                    kind = "alias";
                    labelFingerprint = "accusamus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptas", "molestiae");
                    }};
                    lastStartTimestamp = "ipsum";
                    lastStopTimestamp = "at";
                    lastSuspendedTimestamp = "excepturi";
                    machineType = "perferendis";
                    metadata = new Metadata() {{
                        fingerprint = "nostrum";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "expedita";
                                value = "labore";
                            }}),
                            add(new MetadataItems() {{
                                key = "quidem";
                                value = "recusandae";
                            }}),
                            add(new MetadataItems() {{
                                key = "illum";
                                value = "itaque";
                            }}),
                            add(new MetadataItems() {{
                                key = "asperiores";
                                value = "amet";
                            }}),
                        }};
                        kind = "quod";
                    }};;
                    minCpuPlatform = "inventore";
                    name = "Pearl Ruecker";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "iste";
                                    externalIpv6PrefixLength = 337245;
                                    kind = "veniam";
                                    name = "Mattie D'Amore PhD";
                                    natIP = "maxime";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicDnsName = "soluta";
                                    publicPtrDomainName = "eligendi";
                                    securityPolicy = "fugiat";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "facilis";
                                    externalIpv6PrefixLength = 102004;
                                    kind = "magni";
                                    name = "Whitney Lind";
                                    natIP = "beatae";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicDnsName = "saepe";
                                    publicPtrDomainName = "minima";
                                    securityPolicy = "saepe";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "similique";
                                    externalIpv6PrefixLength = 43024;
                                    kind = "autem";
                                    name = "Dr. Sherry Marks";
                                    natIP = "laudantium";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicDnsName = "deserunt";
                                    publicPtrDomainName = "aut";
                                    securityPolicy = "soluta";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "beatae";
                                    subnetworkRangeName = "ducimus";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "autem";
                                    subnetworkRangeName = "ut";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "occaecati";
                                    subnetworkRangeName = "aspernatur";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "eum";
                                    subnetworkRangeName = "facilis";
                                }}),
                            }};
                            fingerprint = "perferendis";
                            internalIpv6PrefixLength = 767131;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "minima";
                                    externalIpv6PrefixLength = 925805;
                                    kind = "ex";
                                    name = "Roderick Jacobs";
                                    natIP = "similique";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicDnsName = "debitis";
                                    publicPtrDomainName = "quis";
                                    securityPolicy = "accusamus";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "tempore";
                                    externalIpv6PrefixLength = 622315;
                                    kind = "cupiditate";
                                    name = "Mrs. Lee Rogahn";
                                    natIP = "quas";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicDnsName = "nisi";
                                    publicPtrDomainName = "deserunt";
                                    securityPolicy = "corrupti";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "nam";
                                    externalIpv6PrefixLength = 745589;
                                    kind = "odio";
                                    name = "Pat Schinner";
                                    natIP = "ullam";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "iste";
                                    publicPtrDomainName = "at";
                                    securityPolicy = "voluptate";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "minus";
                                    externalIpv6PrefixLength = 709152;
                                    kind = "consequatur";
                                    name = "Ms. Mae McCullough";
                                    natIP = "provident";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "omnis";
                                    publicPtrDomainName = "incidunt";
                                    securityPolicy = "incidunt";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "nostrum";
                            kind = "explicabo";
                            name = "Mr. Perry Wiza";
                            network = "dolorem";
                            networkAttachment = "quaerat";
                            networkIP = "incidunt";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            parentNicName = "cumque";
                            queueCount = 424434;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                            subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "debitis";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                    subnetwork = "ipsum";
                                    vlan = 199631;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "distinctio";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "optio";
                                    vlan = 859821;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "debitis";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                    subnetwork = "neque";
                                    vlan = 177507;
                                }}),
                            }};
                            subnetwork = "nam";
                            vlan = 409935;
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.DEFAULT_;
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("reiciendis", "praesentium");
                            put("suscipit", "explicabo");
                        }};
                    }};;
                    postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                    preservedStateSizeGb = "corporis";
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.UNSPECIFIED;
                        key = "eveniet";
                        values = new String[]{{
                            add("laudantium"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("provident"),
                        add("maxime"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "officiis";
                        scheduling = new ResourceStatusScheduling() {{
                            availabilityDomain = 249978;
                            terminationTimestamp = "magni";
                        }};;
                        serviceIntegrationStatuses = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatus>() {{
                            put("quia", new ResourceStatusServiceIntegrationStatus() {{
                                backupDr = new ResourceStatusServiceIntegrationStatusBackupDRStatus() {{
                                    integrationDetails = "ratione";
                                    state = ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum.ACTIVE;
                                }};
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        availabilityDomain = 985677;
                        currentCpus = 934357;
                        currentMemoryMb = "commodi";
                        hostErrorTimeoutSeconds = 390591;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
                        latencyTolerant = false;
                        localSsdRecoveryTimeout = new Duration() {{
                            nanos = 295835;
                            seconds = "eligendi";
                        }};;
                        locationHint = "numquam";
                        maintenanceFreezeDurationHours = 62739;
                        maintenanceInterval = SchedulingMaintenanceIntervalEnum.RECURRENT;
                        maxRunDuration = new Duration() {{
                            nanos = 169538;
                            seconds = "maiores";
                        }};;
                        minNodeCpus = 719880;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "ad";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("culpa"),
                                    add("sit"),
                                    add("eum"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "provident";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("at"),
                                    add("fugit"),
                                    add("cupiditate"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "dicta";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("libero"),
                                    add("blanditiis"),
                                    add("quae"),
                                    add("eaque"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                        terminationTime = "dolorum";
                    }};;
                    secureTags = new String[]{{
                        add("atque"),
                        add("molestiae"),
                        add("aliquam"),
                    }};
                    selfLink = "perspiciatis";
                    selfLinkWithId = "labore";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Tianna.Spinka98@yahoo.com";
                            scopes = new String[]{{
                                add("earum"),
                                add("ducimus"),
                                add("libero"),
                                add("corporis"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Noelia.Zulauf@gmail.com";
                            scopes = new String[]{{
                                add("quae"),
                                add("deleniti"),
                                add("asperiores"),
                                add("dolor"),
                            }};
                        }}),
                    }};
                    serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                        put("fugit", new ServiceIntegrationSpec() {{
                            backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                plan = "esse";
                            }};
                        }});
                        put("illo", new ServiceIntegrationSpec() {{
                            backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                plan = "perferendis";
                            }};
                        }});
                        put("reprehenderit", new ServiceIntegrationSpec() {{
                            backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                plan = "vel";
                            }};
                        }});
                    }};
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    shieldedVmConfig = new ShieldedVmConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "culpa";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "qui";
                        kmsKeyServiceAccount = "dolore";
                        rawKey = "distinctio";
                        rsaEncryptedKey = "incidunt";
                        sha256 = "consequatur";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.SUSPENDED;
                    statusMessage = "deleniti";
                    tags = new Tags() {{
                        fingerprint = "maiores";
                        items = new String[]{{
                            add("praesentium"),
                        }};
                    }};;
                    upcomingMaintenance = new UpcomingMaintenance() {{
                        canReschedule = false;
                        date = "distinctio";
                        latestWindowStartTime = "sapiente";
                        maintenanceStatus = UpcomingMaintenanceMaintenanceStatusEnum.UNKNOWN;
                        startTimeWindow = new UpcomingMaintenanceTimeWindow() {{
                            earliest = "quae";
                            latest = "doloremque";
                        }};;
                        time = "molestias";
                        type = UpcomingMaintenanceTypeEnum.SCHEDULED;
                        windowEndTime = "saepe";
                        windowStartTime = "laudantium";
                    }};;
                    zone = "praesentium";
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "occaecati";
                key = "natus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "totam";
                sourceInstanceTemplate = "recusandae";
                sourceMachineImage = "odit";
                uploadType = "eos";
                uploadProtocol = "libero";
                userIp = "eveniet";
            }};            

            ComputeInstancesInsertResponse res = sdk.instances.computeInstancesInsert(req, new ComputeInstancesInsertSecurity() {{
                option1 = new ComputeInstancesInsertSecurityOption1("aut", "similique") {{
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

## computeInstancesList

Retrieves the list of instances contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesListRequest;
import org.openapis.openapi.models.operations.ComputeInstancesListResponse;
import org.openapis.openapi.models.operations.ComputeInstancesListSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesListRequest req = new ComputeInstancesListRequest("ipsum", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "sint";
                filter = "dolorem";
                key = "soluta";
                maxResults = 854604L;
                oauthToken = "fugit";
                orderBy = "neque";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "corrupti";
                returnPartialSuccess = false;
                uploadType = "autem";
                uploadProtocol = "autem";
                userIp = "alias";
            }};            

            ComputeInstancesListResponse res = sdk.instances.computeInstancesList(req, new ComputeInstancesListSecurity() {{
                option1 = new ComputeInstancesListSecurityOption1("eaque", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesListReferrers

Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersRequest;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersResponse;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesListReferrersSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesListReferrersRequest req = new ComputeInstancesListReferrersRequest("commodi", "inventore", "porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "magni";
                filter = "in";
                key = "ipsum";
                maxResults = 774266L;
                oauthToken = "est";
                orderBy = "est";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "vitae";
                returnPartialSuccess = false;
                uploadType = "quae";
                uploadProtocol = "voluptatum";
                userIp = "tempore";
            }};            

            ComputeInstancesListReferrersResponse res = sdk.instances.computeInstancesListReferrers(req, new ComputeInstancesListReferrersSecurity() {{
                option1 = new ComputeInstancesListReferrersSecurityOption1("nesciunt", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instanceListReferrers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesPerformMaintenance

Perform a manual maintenance on the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesPerformMaintenanceRequest;
import org.openapis.openapi.models.operations.ComputeInstancesPerformMaintenanceResponse;
import org.openapis.openapi.models.operations.ComputeInstancesPerformMaintenanceSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesPerformMaintenanceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesPerformMaintenanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesPerformMaintenanceRequest req = new ComputeInstancesPerformMaintenanceRequest("maiores", "veritatis", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "ratione";
                key = "inventore";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "modi";
                uploadType = "possimus";
                uploadProtocol = "cumque";
                userIp = "ab";
            }};            

            ComputeInstancesPerformMaintenanceResponse res = sdk.instances.computeInstancesPerformMaintenance(req, new ComputeInstancesPerformMaintenanceSecurity() {{
                option1 = new ComputeInstancesPerformMaintenanceSecurityOption1("voluptatem", "magni") {{
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

## computeInstancesRemoveResourcePolicies

Removes resource policies from an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeInstancesRemoveResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeInstancesRemoveResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesRemoveResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesRemoveResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesRemoveResourcePoliciesRequest req = new ComputeInstancesRemoveResourcePoliciesRequest("iste", "modi", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesRemoveResourcePoliciesRequest = new InstancesRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("voluptatibus"),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "nesciunt";
                key = "perspiciatis";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "quas";
                uploadType = "asperiores";
                uploadProtocol = "dignissimos";
                userIp = "et";
            }};            

            ComputeInstancesRemoveResourcePoliciesResponse res = sdk.instances.computeInstancesRemoveResourcePolicies(req, new ComputeInstancesRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesRemoveResourcePoliciesSecurityOption1("eveniet", "consequuntur") {{
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

## computeInstancesReset

Performs a reset on the instance. This is a hard reset. The VM does not do a graceful shutdown. For more information, see Resetting an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesResetRequest;
import org.openapis.openapi.models.operations.ComputeInstancesResetResponse;
import org.openapis.openapi.models.operations.ComputeInstancesResetSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesResetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesResetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesResetRequest req = new ComputeInstancesResetRequest("provident", "iste", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "repudiandae";
                fields = "officiis";
                key = "inventore";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "quas";
                uploadType = "mollitia";
                uploadProtocol = "cumque";
                userIp = "dolor";
            }};            

            ComputeInstancesResetResponse res = sdk.instances.computeInstancesReset(req, new ComputeInstancesResetSecurity() {{
                option1 = new ComputeInstancesResetSecurityOption1("id", "assumenda") {{
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

## computeInstancesResume

Resumes an instance that was suspended using the instances().suspend method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesResumeRequest;
import org.openapis.openapi.models.operations.ComputeInstancesResumeResponse;
import org.openapis.openapi.models.operations.ComputeInstancesResumeSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesResumeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesResumeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk;
import org.openapis.openapi.models.shared.InstancesResumeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesResumeRequest req = new ComputeInstancesResumeRequest("optio", "commodi", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesResumeRequest = new InstancesResumeRequest() {{
                    disks = new org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk[]{{
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "explicabo";
                                kmsKeyServiceAccount = "numquam";
                                rawKey = "voluptatem";
                                rsaEncryptedKey = "expedita";
                                sha256 = "optio";
                            }};
                            source = "beatae";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "illo";
                                kmsKeyServiceAccount = "itaque";
                                rawKey = "officia";
                                rsaEncryptedKey = "ut";
                                sha256 = "deleniti";
                            }};
                            source = "explicabo";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "totam";
                                kmsKeyServiceAccount = "sunt";
                                rawKey = "magnam";
                                rsaEncryptedKey = "quisquam";
                                sha256 = "eligendi";
                            }};
                            source = "porro";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "aliquid";
                                kmsKeyServiceAccount = "laborum";
                                rawKey = "sed";
                                rsaEncryptedKey = "voluptatibus";
                                sha256 = "ipsa";
                            }};
                            source = "reiciendis";
                        }}),
                    }};
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nostrum";
                        kmsKeyServiceAccount = "libero";
                        rawKey = "omnis";
                        rsaEncryptedKey = "quibusdam";
                        sha256 = "dolor";
                    }};;
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "beatae";
                key = "similique";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "deleniti";
                uploadType = "dignissimos";
                uploadProtocol = "possimus";
                userIp = "dolor";
            }};            

            ComputeInstancesResumeResponse res = sdk.instances.computeInstancesResume(req, new ComputeInstancesResumeSecurity() {{
                option1 = new ComputeInstancesResumeSecurityOption1("dicta", "voluptatem") {{
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

## computeInstancesSendDiagnosticInterrupt

Sends diagnostic interrupt to the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSendDiagnosticInterruptRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSendDiagnosticInterruptResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSendDiagnosticInterruptSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSendDiagnosticInterruptSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSendDiagnosticInterruptSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSendDiagnosticInterruptRequest req = new ComputeInstancesSendDiagnosticInterruptRequest("alias", "necessitatibus", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "soluta";
                key = "voluptatem";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "quaerat";
                uploadProtocol = "nisi";
                userIp = "possimus";
            }};            

            ComputeInstancesSendDiagnosticInterruptResponse res = sdk.instances.computeInstancesSendDiagnosticInterrupt(req, new ComputeInstancesSendDiagnosticInterruptSecurity() {{
                option1 = new ComputeInstancesSendDiagnosticInterruptSecurityOption1("quia", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeInstancesSetDeletionProtection

Sets deletion protection on the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetDeletionProtectionRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetDeletionProtectionResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetDeletionProtectionSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetDeletionProtectionSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetDeletionProtectionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetDeletionProtectionRequest req = new ComputeInstancesSetDeletionProtectionRequest("nihil", "quisquam", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                deletionProtection = false;
                fields = "perferendis";
                key = "voluptates";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "iste";
                requestId = "tenetur";
                uploadType = "similique";
                uploadProtocol = "sint";
                userIp = "nobis";
            }};            

            ComputeInstancesSetDeletionProtectionResponse res = sdk.instances.computeInstancesSetDeletionProtection(req, new ComputeInstancesSetDeletionProtectionSecurity() {{
                option1 = new ComputeInstancesSetDeletionProtectionSecurityOption1("distinctio", "earum") {{
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

## computeInstancesSetDiskAutoDelete

Sets the auto-delete flag for a disk attached to an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetDiskAutoDeleteRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetDiskAutoDeleteResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetDiskAutoDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetDiskAutoDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetDiskAutoDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetDiskAutoDeleteRequest req = new ComputeInstancesSetDiskAutoDeleteRequest(false, "veniam", "maiores", "et", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "sit";
                key = "libero";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "quam";
                uploadType = "aut";
                uploadProtocol = "ducimus";
                userIp = "repudiandae";
            }};            

            ComputeInstancesSetDiskAutoDeleteResponse res = sdk.instances.computeInstancesSetDiskAutoDelete(req, new ComputeInstancesSetDiskAutoDeleteSecurity() {{
                option1 = new ComputeInstancesSetDiskAutoDeleteSecurityOption1("ducimus", "officiis") {{
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

## computeInstancesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.ZoneSetPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetIamPolicyRequest req = new ComputeInstancesSetIamPolicyRequest("dolore", "neque", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "sunt";
                            condition = new Expr() {{
                                description = "non";
                                expression = "soluta";
                                location = "similique";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("accusamus"),
                                add("ipsa"),
                                add("reprehenderit"),
                                add("qui"),
                            }};
                            role = "similique";
                        }}),
                        add(new Binding() {{
                            bindingId = "expedita";
                            condition = new Expr() {{
                                description = "quibusdam";
                                expression = "ex";
                                location = "et";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("rem"),
                            }};
                            role = "facere";
                        }}),
                    }};
                    etag = "magni";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("alias"),
                                            add("maxime"),
                                            add("vitae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("aliquid"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                            add("praesentium"),
                                            add("rerum"),
                                            add("repudiandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("fugit"),
                                    add("ab"),
                                }};
                                service = "quia";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloribus"),
                                            add("officia"),
                                            add("ullam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("natus"),
                                }};
                                service = "vel";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "blanditiis";
                                condition = new Expr() {{
                                    description = "eum";
                                    expression = "esse";
                                    location = "debitis";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("nam"),
                                }};
                                role = "neque";
                            }}),
                        }};
                        etag = "laborum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "rerum";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("molestiae"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                }};
                                description = "sint";
                                ins = new String[]{{
                                    add("nobis"),
                                    add("laboriosam"),
                                    add("recusandae"),
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
                                                    name = "Brenda Legros PhD";
                                                    value = "unde";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Archie Hirthe MD";
                                                    value = "ducimus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Phil Williamson";
                                                    value = "nam";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "impedit";
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
                                                    name = "Jacqueline Rau";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roberto Abshire";
                                                    value = "magni";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Micheal Orn";
                                                    value = "eligendi";
                                                }}),
                                            }};
                                            field = "numquam";
                                            metric = "fuga";
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
                                                    name = "Donna Tillman";
                                                    value = "esse";
                                                }}),
                                            }};
                                            field = "dolores";
                                            metric = "laboriosam";
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
                                                    name = "Mr. Adam Zboncak";
                                                    value = "aliquam";
                                                }}),
                                            }};
                                            field = "architecto";
                                            metric = "excepturi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("architecto"),
                                    add("atque"),
                                }};
                                permissions = new String[]{{
                                    add("saepe"),
                                    add("accusamus"),
                                    add("incidunt"),
                                    add("dicta"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "hic";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("provident"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "beatae";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quasi"),
                                            add("dolorum"),
                                            add("adipisci"),
                                            add("a"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "sequi";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("autem"),
                                            add("omnis"),
                                        }};
                                    }}),
                                }};
                                description = "itaque";
                                ins = new String[]{{
                                    add("harum"),
                                    add("commodi"),
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
                                                    name = "Eula Ratke II";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            field = "unde";
                                            metric = "quos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("suscipit"),
                                    add("in"),
                                    add("odit"),
                                    add("alias"),
                                }};
                                permissions = new String[]{{
                                    add("ipsum"),
                                    add("illo"),
                                    add("aperiam"),
                                    add("sequi"),
                                }};
                            }}),
                        }};
                        version = 980953;
                    }};;
                }};;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "alias";
                key = "eligendi";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "amet";
                uploadProtocol = "debitis";
                userIp = "quo";
            }};            

            ComputeInstancesSetIamPolicyResponse res = sdk.instances.computeInstancesSetIamPolicy(req, new ComputeInstancesSetIamPolicySecurity() {{
                option1 = new ComputeInstancesSetIamPolicySecurityOption1("deleniti", "aliquid") {{
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

## computeInstancesSetLabels

Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetLabelsRequest req = new ComputeInstancesSetLabelsRequest("blanditiis", "blanditiis", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetLabelsRequest = new InstancesSetLabelsRequest() {{
                    labelFingerprint = "blanditiis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nobis", "vel");
                        put("tenetur", "optio");
                        put("consequatur", "consectetur");
                        put("illo", "dolores");
                    }};
                }};;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "alias";
                fields = "officia";
                key = "mollitia";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "vero";
                uploadType = "repudiandae";
                uploadProtocol = "sit";
                userIp = "aut";
            }};            

            ComputeInstancesSetLabelsResponse res = sdk.instances.computeInstancesSetLabels(req, new ComputeInstancesSetLabelsSecurity() {{
                option1 = new ComputeInstancesSetLabelsSecurityOption1("labore", "accusamus") {{
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

## computeInstancesSetMachineResources

Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineResourcesRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineResourcesResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineResourcesSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineResourcesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineResourcesSecurityOption2;
import org.openapis.openapi.models.shared.AcceleratorConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetMachineResourcesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetMachineResourcesRequest req = new ComputeInstancesSetMachineResourcesRequest("distinctio", "dolorum", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMachineResourcesRequest = new InstancesSetMachineResourcesRequest() {{
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 552996;
                            acceleratorType = "voluptate";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 204109;
                            acceleratorType = "explicabo";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 688456;
                            acceleratorType = "eveniet";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 336691;
                            acceleratorType = "alias";
                        }}),
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "consequatur";
                key = "atque";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "neque";
                uploadType = "quae";
                uploadProtocol = "a";
                userIp = "eaque";
            }};            

            ComputeInstancesSetMachineResourcesResponse res = sdk.instances.computeInstancesSetMachineResources(req, new ComputeInstancesSetMachineResourcesSecurity() {{
                option1 = new ComputeInstancesSetMachineResourcesSecurityOption1("aliquid", "maiores") {{
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

## computeInstancesSetMachineType

Changes the machine type for a stopped instance to the machine type specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineTypeRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineTypeResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineTypeSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineTypeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetMachineTypeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetMachineTypeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetMachineTypeRequest req = new ComputeInstancesSetMachineTypeRequest("voluptatem", "tempore", "quo") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMachineTypeRequest = new InstancesSetMachineTypeRequest() {{
                    machineType = "enim";
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "ex";
                key = "voluptatum";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "modi";
                uploadType = "ratione";
                uploadProtocol = "quisquam";
                userIp = "iste";
            }};            

            ComputeInstancesSetMachineTypeResponse res = sdk.instances.computeInstancesSetMachineType(req, new ComputeInstancesSetMachineTypeSecurity() {{
                option1 = new ComputeInstancesSetMachineTypeSecurityOption1("quam", "iste") {{
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

## computeInstancesSetMetadata

Sets metadata for the specified instance to the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetMetadataRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetMetadataResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetMetadataSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetMetadataSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetMetadataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.MetadataItems;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetMetadataRequest req = new ComputeInstancesSetMetadataRequest("doloremque", "ullam", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                metadata = new Metadata() {{
                    fingerprint = "ducimus";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "odio";
                            value = "animi";
                        }}),
                        add(new MetadataItems() {{
                            key = "exercitationem";
                            value = "repellendus";
                        }}),
                        add(new MetadataItems() {{
                            key = "culpa";
                            value = "vel";
                        }}),
                    }};
                    kind = "ex";
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "vero";
                key = "reprehenderit";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "mollitia";
                uploadType = "nihil";
                uploadProtocol = "dolore";
                userIp = "distinctio";
            }};            

            ComputeInstancesSetMetadataResponse res = sdk.instances.computeInstancesSetMetadata(req, new ComputeInstancesSetMetadataSecurity() {{
                option1 = new ComputeInstancesSetMetadataSecurityOption1("error", "culpa") {{
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

## computeInstancesSetMinCpuPlatform

Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetMinCpuPlatformRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetMinCpuPlatformResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetMinCpuPlatformSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetMinCpuPlatformSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetMinCpuPlatformSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetMinCpuPlatformRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetMinCpuPlatformRequest req = new ComputeInstancesSetMinCpuPlatformRequest("culpa", "odit", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetMinCpuPlatformRequest = new InstancesSetMinCpuPlatformRequest() {{
                    minCpuPlatform = "consequuntur";
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "ad";
                key = "totam";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "fugit";
                requestId = "illum";
                uploadType = "odit";
                uploadProtocol = "dolorum";
                userIp = "velit";
            }};            

            ComputeInstancesSetMinCpuPlatformResponse res = sdk.instances.computeInstancesSetMinCpuPlatform(req, new ComputeInstancesSetMinCpuPlatformSecurity() {{
                option1 = new ComputeInstancesSetMinCpuPlatformSecurityOption1("veritatis", "doloribus") {{
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

## computeInstancesSetName

Sets name of an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetNameRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetNameResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetNameSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetNameSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetNameSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetNameRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetNameRequest req = new ComputeInstancesSetNameRequest("molestias", "distinctio", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetNameRequest = new InstancesSetNameRequest() {{
                    currentName = "deserunt";
                    name = "Tyler Pfeffer";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "eius";
                key = "magnam";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "dolores";
                requestId = "ratione";
                uploadType = "qui";
                uploadProtocol = "voluptates";
                userIp = "unde";
            }};            

            ComputeInstancesSetNameResponse res = sdk.instances.computeInstancesSetName(req, new ComputeInstancesSetNameSecurity() {{
                option1 = new ComputeInstancesSetNameSecurityOption1("mollitia", "veniam") {{
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

## computeInstancesSetScheduling

Sets an instance's scheduling options. You can only call this method on a stopped instance, that is, a VM instance that is in a `TERMINATED` state. See Instance Life Cycle for more information on the possible instance states. For more information about setting scheduling options for a VM, see Set VM host maintenance policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetSchedulingRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetSchedulingResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetSchedulingSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetSchedulingSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetSchedulingSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Duration;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetSchedulingRequest req = new ComputeInstancesSetSchedulingRequest("at", "eveniet", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                scheduling = new Scheduling() {{
                    automaticRestart = false;
                    availabilityDomain = 671077;
                    currentCpus = 764817;
                    currentMemoryMb = "repellendus";
                    hostErrorTimeoutSeconds = 489711;
                    instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                    latencyTolerant = false;
                    localSsdRecoveryTimeout = new Duration() {{
                        nanos = 637434;
                        seconds = "voluptatum";
                    }};;
                    locationHint = "cupiditate";
                    maintenanceFreezeDurationHours = 566785;
                    maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                    maxRunDuration = new Duration() {{
                        nanos = 71151;
                        seconds = "rerum";
                    }};;
                    minNodeCpus = 338666;
                    nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                        add(new SchedulingNodeAffinity() {{
                            key = "tenetur";
                            operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                            values = new String[]{{
                                add("quos"),
                                add("magni"),
                            }};
                        }}),
                        add(new SchedulingNodeAffinity() {{
                            key = "repudiandae";
                            operator = SchedulingNodeAffinityOperatorEnum.IN;
                            values = new String[]{{
                                add("aspernatur"),
                                add("illum"),
                                add("facilis"),
                                add("necessitatibus"),
                            }};
                        }}),
                        add(new SchedulingNodeAffinity() {{
                            key = "sed";
                            operator = SchedulingNodeAffinityOperatorEnum.IN;
                            values = new String[]{{
                                add("nostrum"),
                                add("voluptatum"),
                                add("necessitatibus"),
                                add("deleniti"),
                            }};
                        }}),
                    }};
                    onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                    preemptible = false;
                    provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                    terminationTime = "dignissimos";
                }};;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "sed";
                key = "minus";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "aliquid";
                uploadType = "iusto";
                uploadProtocol = "vel";
                userIp = "nihil";
            }};            

            ComputeInstancesSetSchedulingResponse res = sdk.instances.computeInstancesSetScheduling(req, new ComputeInstancesSetSchedulingSecurity() {{
                option1 = new ComputeInstancesSetSchedulingSecurityOption1("praesentium", "maiores") {{
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

## computeInstancesSetSecurityPolicy

Sets the Google Cloud Armor security policy for the specified instance. For more information, see Google Cloud Armor Overview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetSecurityPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetSecurityPolicyRequest req = new ComputeInstancesSetSecurityPolicyRequest("id", "dolores", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetSecurityPolicyRequest = new InstancesSetSecurityPolicyRequest() {{
                    networkInterfaces = new String[]{{
                        add("atque"),
                        add("sequi"),
                    }};
                    securityPolicy = "commodi";
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "dolor";
                key = "facere";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "doloremque";
                userIp = "natus";
            }};            

            ComputeInstancesSetSecurityPolicyResponse res = sdk.instances.computeInstancesSetSecurityPolicy(req, new ComputeInstancesSetSecurityPolicySecurity() {{
                option1 = new ComputeInstancesSetSecurityPolicySecurityOption1("ea", "doloribus") {{
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

## computeInstancesSetServiceAccount

Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetServiceAccountRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetServiceAccountResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetServiceAccountSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetServiceAccountSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetServiceAccountSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesSetServiceAccountRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetServiceAccountRequest req = new ComputeInstancesSetServiceAccountRequest("deserunt", "officiis", "nam") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetServiceAccountRequest = new InstancesSetServiceAccountRequest() {{
                    email = "Edwardo44@yahoo.com";
                    scopes = new String[]{{
                        add("voluptatem"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quos";
                key = "rerum";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "pariatur";
                uploadType = "omnis";
                uploadProtocol = "quo";
                userIp = "mollitia";
            }};            

            ComputeInstancesSetServiceAccountResponse res = sdk.instances.computeInstancesSetServiceAccount(req, new ComputeInstancesSetServiceAccountSecurity() {{
                option1 = new ComputeInstancesSetServiceAccountSecurityOption1("nisi", "alias") {{
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

## computeInstancesSetShieldedInstanceIntegrityPolicy

Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedInstanceIntegrityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest req = new ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest("reprehenderit", "ipsam", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                    updateAutoLearnPolicy = false;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "alias";
                key = "debitis";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "ex";
                uploadType = "iusto";
                uploadProtocol = "quae";
                userIp = "veniam";
            }};            

            ComputeInstancesSetShieldedInstanceIntegrityPolicyResponse res = sdk.instances.computeInstancesSetShieldedInstanceIntegrityPolicy(req, new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity() {{
                option1 = new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1("corporis", "debitis") {{
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

## computeInstancesSetShieldedVmIntegrityPolicy

Sets the Shielded VM integrity policy for a VM instance. You can only use this method on a running VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedVmIntegrityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedVmIntegrityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedVmIntegrityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShieldedVmIntegrityPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetShieldedVmIntegrityPolicyRequest req = new ComputeInstancesSetShieldedVmIntegrityPolicyRequest("explicabo", "assumenda", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                    updateAutoLearnPolicy = false;
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "in";
                key = "aut";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "earum";
                uploadType = "explicabo";
                uploadProtocol = "natus";
                userIp = "in";
            }};            

            ComputeInstancesSetShieldedVmIntegrityPolicyResponse res = sdk.instances.computeInstancesSetShieldedVmIntegrityPolicy(req, new ComputeInstancesSetShieldedVmIntegrityPolicySecurity() {{
                option1 = new ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption1("hic", "nemo") {{
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

## computeInstancesSetTags

Sets network tags for the specified instance to the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSetTagsRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSetTagsResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSetTagsSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSetTagsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSetTagsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSetTagsRequest req = new ComputeInstancesSetTagsRequest("totam", "architecto", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                tags = new Tags() {{
                    fingerprint = "soluta";
                    items = new String[]{{
                        add("dolorum"),
                        add("deserunt"),
                        add("odio"),
                    }};
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "et";
                key = "voluptatem";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "eaque";
                uploadType = "quam";
                uploadProtocol = "laboriosam";
                userIp = "asperiores";
            }};            

            ComputeInstancesSetTagsResponse res = sdk.instances.computeInstancesSetTags(req, new ComputeInstancesSetTagsSecurity() {{
                option1 = new ComputeInstancesSetTagsSecurityOption1("delectus", "corporis") {{
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

## computeInstancesSimulateMaintenanceEvent

Simulates a host maintenance event on a VM. For more information, see Simulate a host maintenance event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSimulateMaintenanceEventRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSimulateMaintenanceEventResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSimulateMaintenanceEventSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSimulateMaintenanceEventSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSimulateMaintenanceEventSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSimulateMaintenanceEventRequest req = new ComputeInstancesSimulateMaintenanceEventRequest("tenetur", "laboriosam", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "ab";
                key = "numquam";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "quos";
                requestId = "voluptatum";
                uploadType = "explicabo";
                uploadProtocol = "aliquid";
                userIp = "perspiciatis";
                withExtendedNotifications = false;
            }};            

            ComputeInstancesSimulateMaintenanceEventResponse res = sdk.instances.computeInstancesSimulateMaintenanceEvent(req, new ComputeInstancesSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeInstancesSimulateMaintenanceEventSecurityOption1("tempore", "nisi") {{
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

## computeInstancesStart

Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesStartRequest;
import org.openapis.openapi.models.operations.ComputeInstancesStartResponse;
import org.openapis.openapi.models.operations.ComputeInstancesStartSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesStartSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesStartSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesStartRequest req = new ComputeInstancesStartRequest("similique", "esse", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "quos";
                key = "consequuntur";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "numquam";
                uploadType = "hic";
                uploadProtocol = "repellat";
                userIp = "delectus";
            }};            

            ComputeInstancesStartResponse res = sdk.instances.computeInstancesStart(req, new ComputeInstancesStartSecurity() {{
                option1 = new ComputeInstancesStartSecurityOption1("quidem", "quibusdam") {{
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

## computeInstancesStartWithEncryptionKey

Starts an instance that was stopped using the instances().stop method. For more information, see Restart an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesStartWithEncryptionKeyRequest;
import org.openapis.openapi.models.operations.ComputeInstancesStartWithEncryptionKeyResponse;
import org.openapis.openapi.models.operations.ComputeInstancesStartWithEncryptionKeySecurity;
import org.openapis.openapi.models.operations.ComputeInstancesStartWithEncryptionKeySecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesStartWithEncryptionKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk;
import org.openapis.openapi.models.shared.InstancesStartWithEncryptionKeyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesStartWithEncryptionKeyRequest req = new ComputeInstancesStartWithEncryptionKeyRequest("et", "officiis", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesStartWithEncryptionKeyRequest = new InstancesStartWithEncryptionKeyRequest() {{
                    disks = new org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk[]{{
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "illo";
                                kmsKeyServiceAccount = "nulla";
                                rawKey = "nulla";
                                rsaEncryptedKey = "quisquam";
                                sha256 = "commodi";
                            }};
                            source = "sint";
                        }}),
                    }};
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "doloremque";
                        kmsKeyServiceAccount = "sequi";
                        rawKey = "deleniti";
                        rsaEncryptedKey = "quidem";
                        sha256 = "dicta";
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "nihil";
                key = "quidem";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "accusamus";
                uploadType = "tempore";
                uploadProtocol = "enim";
                userIp = "doloribus";
            }};            

            ComputeInstancesStartWithEncryptionKeyResponse res = sdk.instances.computeInstancesStartWithEncryptionKey(req, new ComputeInstancesStartWithEncryptionKeySecurity() {{
                option1 = new ComputeInstancesStartWithEncryptionKeySecurityOption1("possimus", "non") {{
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

## computeInstancesStop

Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur VM usage charges while they are stopped. However, resources that the VM is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesStopRequest;
import org.openapis.openapi.models.operations.ComputeInstancesStopResponse;
import org.openapis.openapi.models.operations.ComputeInstancesStopSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesStopSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesStopSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesStopRequest req = new ComputeInstancesStopRequest("alias", "tempore", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "eius";
                discardLocalSsd = false;
                fields = "cupiditate";
                key = "sit";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "sapiente";
                requestId = "odit";
                uploadType = "eaque";
                uploadProtocol = "sed";
                userIp = "exercitationem";
            }};            

            ComputeInstancesStopResponse res = sdk.instances.computeInstancesStop(req, new ComputeInstancesStopSecurity() {{
                option1 = new ComputeInstancesStopSecurityOption1("aliquam", "id") {{
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

## computeInstancesSuspend

This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time. Suspended instances have no compute costs (cores or RAM), and incur only storage charges for the saved VM memory and localSSD data. Any charged resources the virtual machine was using, such as persistent disks and static IP addresses, will continue to be charged while the instance is suspended. For more information, see Suspending and resuming an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesSuspendRequest;
import org.openapis.openapi.models.operations.ComputeInstancesSuspendResponse;
import org.openapis.openapi.models.operations.ComputeInstancesSuspendSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesSuspendSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesSuspendSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesSuspendRequest req = new ComputeInstancesSuspendRequest("omnis", "ad", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "maxime";
                discardLocalSsd = false;
                fields = "distinctio";
                key = "numquam";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "aspernatur";
                requestId = "possimus";
                uploadType = "aliquid";
                uploadProtocol = "cum";
                userIp = "minus";
            }};            

            ComputeInstancesSuspendResponse res = sdk.instances.computeInstancesSuspend(req, new ComputeInstancesSuspendSecurity() {{
                option1 = new ComputeInstancesSuspendSecurityOption1("cupiditate", "cupiditate") {{
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

## computeInstancesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeInstancesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesTestIamPermissionsRequest req = new ComputeInstancesTestIamPermissionsRequest("quasi", "dignissimos", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("accusamus"),
                        add("eius"),
                        add("dignissimos"),
                    }};
                }};;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "cupiditate";
                key = "nihil";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "ut";
                uploadProtocol = "beatae";
                userIp = "sequi";
            }};            

            ComputeInstancesTestIamPermissionsResponse res = sdk.instances.computeInstancesTestIamPermissions(req, new ComputeInstancesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstancesTestIamPermissionsSecurityOption1("vero", "laboriosam") {{
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

## computeInstancesUpdate

Updates an instance only if the necessary resources are available. This method can update only a specific set of instance properties. See Updating a running instance for a list of updatable instance properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateMinimalActionEnum;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateMostDisruptiveAllowedActionEnum;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateSecurityOption2;
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
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.InstanceKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstanceParams;
import org.openapis.openapi.models.shared.InstancePostKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstancePrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceStatusEnum;
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
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceStatusScheduling;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatus;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatusBackupDRStatus;
import org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum;
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
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.ShieldedVmIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.UpcomingMaintenance;
import org.openapis.openapi.models.shared.UpcomingMaintenanceMaintenanceStatusEnum;
import org.openapis.openapi.models.shared.UpcomingMaintenanceTimeWindow;
import org.openapis.openapi.models.shared.UpcomingMaintenanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateRequest req = new ComputeInstancesUpdateRequest("dolorum", "rem", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                instance1 = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        numaNodeCount = 113735;
                        performanceMonitoringUnit = AdvancedMachineFeaturesPerformanceMonitoringUnitEnum.ENHANCED;
                        threadsPerCore = 519303;
                        visibleCoreCount = 202483;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        confidentialInstanceType = ConfidentialInstanceConfigConfidentialInstanceTypeEnum.SEV_SNP;
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "at";
                    creationTimestamp = "rem";
                    deletionProtection = false;
                    description = "iure";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "quae";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "quibusdam";
                                kmsKeyServiceAccount = "natus";
                                rawKey = "molestias";
                                rsaEncryptedKey = "quod";
                                sha256 = "quo";
                            }};
                            diskSizeGb = "repellat";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.GVNIC;
                                }}),
                            }};
                            index = 518744;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "quae";
                                diskName = "beatae";
                                diskSizeGb = "praesentium";
                                diskType = "commodi";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                }};
                                interface_ = AttachedDiskInitializeParamsInterfaceEnum.NVME;
                                labels = new java.util.HashMap<String, String>() {{
                                    put("magni", "tenetur");
                                }};
                                licenseCodes = new String[]{{
                                    add("cumque"),
                                    add("harum"),
                                    add("dicta"),
                                }};
                                licenses = new String[]{{
                                    add("dolorum"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "sed";
                                provisionedThroughput = "ut";
                                replicaZones = new String[]{{
                                    add("quas"),
                                    add("ab"),
                                    add("quaerat"),
                                    add("sequi"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "voluptas");
                                    put("suscipit", "optio");
                                    put("ullam", "iusto");
                                }};
                                resourcePolicies = new String[]{{
                                    add("officia"),
                                    add("ab"),
                                }};
                                sourceImage = "recusandae";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quia";
                                    kmsKeyServiceAccount = "iure";
                                    rawKey = "ex";
                                    rsaEncryptedKey = "quos";
                                    sha256 = "ducimus";
                                }};
                                sourceInstantSnapshot = "ratione";
                                sourceSnapshot = "accusantium";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quidem";
                                    kmsKeyServiceAccount = "accusamus";
                                    rawKey = "dolorem";
                                    rsaEncryptedKey = "ducimus";
                                    sha256 = "harum";
                                }};
                                storagePool = "sit";
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "corrupti";
                            licenses = new String[]{{
                                add("nam"),
                                add("quod"),
                                add("dolore"),
                                add("atque"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            savedState = AttachedDiskSavedStateEnum.PRESERVED;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "esse";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "voluptas";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "rerum";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "neque";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "sit";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "quis";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "dicta";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "fugiat";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("et"),
                                add("sit"),
                                add("nemo"),
                            }};
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    eraseWindowsVssSignature = false;
                    fingerprint = "atque";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 153803;
                            acceleratorType = "quaerat";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 511220;
                            acceleratorType = "eius";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 771253;
                            acceleratorType = "consectetur";
                        }}),
                    }};
                    hostname = "immaterial-teammate.name";
                    id = "ut";
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "corrupti";
                        kmsKeyServiceAccount = "corrupti";
                        rawKey = "occaecati";
                        rsaEncryptedKey = "eos";
                        sha256 = "iusto";
                    }};;
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.NONE;
                    kind = "magni";
                    labelFingerprint = "assumenda";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquam", "debitis");
                    }};
                    lastStartTimestamp = "sit";
                    lastStopTimestamp = "cum";
                    lastSuspendedTimestamp = "voluptatum";
                    machineType = "maiores";
                    metadata = new Metadata() {{
                        fingerprint = "quo";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "illum";
                                value = "enim";
                            }}),
                        }};
                        kind = "natus";
                    }};;
                    minCpuPlatform = "sapiente";
                    name = "Charlene Renner";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "odit";
                                    externalIpv6PrefixLength = 51467;
                                    kind = "tempore";
                                    name = "Jeffrey Kshlerin V";
                                    natIP = "maxime";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicDnsName = "commodi";
                                    publicPtrDomainName = "nobis";
                                    securityPolicy = "cupiditate";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "consequuntur";
                                    externalIpv6PrefixLength = 979068;
                                    kind = "esse";
                                    name = "Josephine Hagenes";
                                    natIP = "accusantium";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicDnsName = "maiores";
                                    publicPtrDomainName = "tempora";
                                    securityPolicy = "reprehenderit";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "saepe";
                                    externalIpv6PrefixLength = 740197;
                                    kind = "ad";
                                    name = "Sabrina Gutkowski";
                                    natIP = "maiores";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "dolore";
                                    publicPtrDomainName = "blanditiis";
                                    securityPolicy = "eveniet";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "impedit";
                                    subnetworkRangeName = "quisquam";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "distinctio";
                                    subnetworkRangeName = "vel";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "sint";
                                    subnetworkRangeName = "repellendus";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "minima";
                                    subnetworkRangeName = "numquam";
                                }}),
                            }};
                            fingerprint = "ab";
                            internalIpv6PrefixLength = 713375;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "tempore";
                                    externalIpv6PrefixLength = 194687;
                                    kind = "sint";
                                    name = "Camille Farrell";
                                    natIP = "nisi";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicDnsName = "consequuntur";
                                    publicPtrDomainName = "quis";
                                    securityPolicy = "expedita";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "laborum";
                                    externalIpv6PrefixLength = 202737;
                                    kind = "magni";
                                    name = "Brenda Blanda";
                                    natIP = "porro";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicDnsName = "reprehenderit";
                                    publicPtrDomainName = "sint";
                                    securityPolicy = "optio";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                            ipv6Address = "quas";
                            kind = "saepe";
                            name = "Gregory Spencer";
                            network = "porro";
                            networkAttachment = "minima";
                            networkIP = "placeat";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            parentNicName = "tenetur";
                            queueCount = 606817;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "et";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "provident";
                                    vlan = 27789;
                                }}),
                            }};
                            subnetwork = "earum";
                            vlan = 845300;
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "ipsum";
                                    externalIpv6PrefixLength = 458686;
                                    kind = "odio";
                                    name = "Kelli Zieme";
                                    natIP = "ex";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "ducimus";
                                    publicPtrDomainName = "voluptatibus";
                                    securityPolicy = "voluptatem";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "nostrum";
                                    externalIpv6PrefixLength = 40355;
                                    kind = "eius";
                                    name = "Ramon Toy";
                                    natIP = "consequuntur";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "hic";
                                    publicPtrDomainName = "nam";
                                    securityPolicy = "eum";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "repudiandae";
                                    subnetworkRangeName = "recusandae";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "architecto";
                                    subnetworkRangeName = "sint";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "cumque";
                                    subnetworkRangeName = "explicabo";
                                }}),
                            }};
                            fingerprint = "nisi";
                            internalIpv6PrefixLength = 788582;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "impedit";
                                    externalIpv6PrefixLength = 703574;
                                    kind = "ex";
                                    name = "Leah Schneider";
                                    natIP = "dolor";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicDnsName = "optio";
                                    publicPtrDomainName = "est";
                                    securityPolicy = "soluta";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                            ipv6Address = "rerum";
                            kind = "voluptate";
                            name = "Lillie Orn";
                            network = "modi";
                            networkAttachment = "facere";
                            networkIP = "illum";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            parentNicName = "nulla";
                            queueCount = 634147;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                            subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "distinctio";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "veniam";
                                    vlan = 517655;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "repudiandae";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "velit";
                                    vlan = 861901;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "quis";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                    subnetwork = "nobis";
                                    vlan = 655777;
                                }}),
                            }};
                            subnetwork = "illo";
                            vlan = 754684;
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "nesciunt";
                                    externalIpv6PrefixLength = 674679;
                                    kind = "quibusdam";
                                    name = "Bobbie Ratke";
                                    natIP = "corporis";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicDnsName = "quasi";
                                    publicPtrDomainName = "totam";
                                    securityPolicy = "harum";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "ipsam";
                                    externalIpv6PrefixLength = 892340;
                                    kind = "rem";
                                    name = "Elisa Jaskolski";
                                    natIP = "aspernatur";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicDnsName = "odit";
                                    publicPtrDomainName = "quis";
                                    securityPolicy = "voluptas";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "repudiandae";
                                    externalIpv6PrefixLength = 563474;
                                    kind = "exercitationem";
                                    name = "Jason Ruecker";
                                    natIP = "tempore";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicDnsName = "quod";
                                    publicPtrDomainName = "mollitia";
                                    securityPolicy = "laudantium";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quae";
                                    subnetworkRangeName = "quos";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "repellendus";
                                    subnetworkRangeName = "in";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "ipsum";
                                    subnetworkRangeName = "corrupti";
                                }}),
                            }};
                            fingerprint = "aut";
                            internalIpv6PrefixLength = 613925;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "aut";
                                    externalIpv6PrefixLength = 172105;
                                    kind = "doloribus";
                                    name = "Jessie Watsica";
                                    natIP = "qui";
                                    networkTier = AccessConfigNetworkTierEnum.SELECT;
                                    publicDnsName = "cum";
                                    publicPtrDomainName = "nemo";
                                    securityPolicy = "ex";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "nisi";
                                    externalIpv6PrefixLength = 314354;
                                    kind = "similique";
                                    name = "Helen Kunde";
                                    natIP = "officiis";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicDnsName = "cum";
                                    publicPtrDomainName = "totam";
                                    securityPolicy = "laborum";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "eum";
                                    externalIpv6PrefixLength = 527451;
                                    kind = "ut";
                                    name = "Owen Conn";
                                    natIP = "iste";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicDnsName = "consequatur";
                                    publicPtrDomainName = "tempora";
                                    securityPolicy = "neque";
                                    setPublicDns = false;
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "mollitia";
                            kind = "sit";
                            name = "Tyler Haag III";
                            network = "velit";
                            networkAttachment = "praesentium";
                            networkIP = "voluptate";
                            nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            parentNicName = "eveniet";
                            queueCount = 191852;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "vero";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "perspiciatis";
                                    vlan = 790611;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "reprehenderit";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                                    subnetwork = "minima";
                                    vlan = 835197;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "reiciendis";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                                    subnetwork = "iusto";
                                    vlan = 215162;
                                }}),
                                add(new NetworkInterfaceSubInterface() {{
                                    ipAddress = "corporis";
                                    ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                                    subnetwork = "eveniet";
                                    vlan = 334649;
                                }}),
                            }};
                            subnetwork = "placeat";
                            vlan = 724392;
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        externalIpEgressBandwidthTier = NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum.TIER1;
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("reprehenderit", "ducimus");
                            put("voluptatem", "quasi");
                            put("voluptate", "harum");
                        }};
                    }};;
                    postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum.NOOP;
                    preservedStateSizeGb = "voluptas";
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                        key = "eius";
                        values = new String[]{{
                            add("soluta"),
                            add("explicabo"),
                            add("eum"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("laborum"),
                        add("eius"),
                        add("eveniet"),
                        add("cupiditate"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "natus";
                        scheduling = new ResourceStatusScheduling() {{
                            availabilityDomain = 569764;
                            terminationTimestamp = "quos";
                        }};;
                        serviceIntegrationStatuses = new java.util.HashMap<String, org.openapis.openapi.models.shared.ResourceStatusServiceIntegrationStatus>() {{
                            put("voluptatum", new ResourceStatusServiceIntegrationStatus() {{
                                backupDr = new ResourceStatusServiceIntegrationStatusBackupDRStatus() {{
                                    integrationDetails = "iure";
                                    state = ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum.FAILED;
                                }};
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        availabilityDomain = 819038;
                        currentCpus = 891740;
                        currentMemoryMb = "reiciendis";
                        hostErrorTimeoutSeconds = 759597;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                        latencyTolerant = false;
                        localSsdRecoveryTimeout = new Duration() {{
                            nanos = 689087;
                            seconds = "fugit";
                        }};;
                        locationHint = "velit";
                        maintenanceFreezeDurationHours = 617440;
                        maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                        maxRunDuration = new Duration() {{
                            nanos = 2513;
                            seconds = "autem";
                        }};;
                        minNodeCpus = 757990;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "cupiditate";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("facere"),
                                    add("error"),
                                    add("atque"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "unde";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("officia"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "consectetur";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("et"),
                                    add("veniam"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "culpa";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("laborum"),
                                    add("voluptatem"),
                                    add("quaerat"),
                                    add("eius"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        terminationTime = "deserunt";
                    }};;
                    secureTags = new String[]{{
                        add("illum"),
                        add("ex"),
                        add("saepe"),
                        add("dicta"),
                    }};
                    selfLink = "sequi";
                    selfLinkWithId = "mollitia";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Angelica88@gmail.com";
                            scopes = new String[]{{
                                add("illo"),
                                add("totam"),
                                add("eligendi"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Eulah26@yahoo.com";
                            scopes = new String[]{{
                                add("commodi"),
                                add("minus"),
                                add("earum"),
                            }};
                        }}),
                    }};
                    serviceIntegrationSpecs = new java.util.HashMap<String, org.openapis.openapi.models.shared.ServiceIntegrationSpec>() {{
                        put("excepturi", new ServiceIntegrationSpec() {{
                            backupDr = new ServiceIntegrationSpecBackupDRSpec() {{
                                plan = "laudantium";
                            }};
                        }});
                    }};
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    shieldedVmConfig = new ShieldedVmConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "fuga";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "voluptatem";
                        kmsKeyServiceAccount = "soluta";
                        rawKey = "nesciunt";
                        rsaEncryptedKey = "in";
                        sha256 = "eius";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.STAGING;
                    statusMessage = "beatae";
                    tags = new Tags() {{
                        fingerprint = "nihil";
                        items = new String[]{{
                            add("nulla"),
                            add("sint"),
                            add("nemo"),
                            add("minus"),
                        }};
                    }};;
                    upcomingMaintenance = new UpcomingMaintenance() {{
                        canReschedule = false;
                        date = "officiis";
                        latestWindowStartTime = "ipsum";
                        maintenanceStatus = UpcomingMaintenanceMaintenanceStatusEnum.ONGOING;
                        startTimeWindow = new UpcomingMaintenanceTimeWindow() {{
                            earliest = "ut";
                            latest = "numquam";
                        }};;
                        time = "distinctio";
                        type = UpcomingMaintenanceTypeEnum.UNSCHEDULED;
                        windowEndTime = "eius";
                        windowStartTime = "itaque";
                    }};;
                    zone = "expedita";
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                clearSecureTag = false;
                fields = "quasi";
                key = "eligendi";
                minimalAction = ComputeInstancesUpdateMinimalActionEnum.REFRESH;
                mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum.NO_EFFECT;
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "quo";
                uploadType = "amet";
                uploadProtocol = "et";
                userIp = "aliquam";
            }};            

            ComputeInstancesUpdateResponse res = sdk.instances.computeInstancesUpdate(req, new ComputeInstancesUpdateSecurity() {{
                option1 = new ComputeInstancesUpdateSecurityOption1("aperiam", "repellendus") {{
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

## computeInstancesUpdateAccessConfig

Updates the specified access config from an instance's network interface with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateAccessConfigRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateAccessConfigResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateAccessConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateAccessConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateAccessConfigSecurityOption2;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.AccessConfigNetworkTierEnum;
import org.openapis.openapi.models.shared.AccessConfigTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateAccessConfigRequest req = new ComputeInstancesUpdateAccessConfigRequest("deleniti", "esse", "iusto", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "ipsam";
                    externalIpv6PrefixLength = 231694;
                    kind = "ad";
                    name = "Jerry Schuppe";
                    natIP = "tempore";
                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                    publicDnsName = "iure";
                    publicPtrDomainName = "modi";
                    securityPolicy = "rerum";
                    setPublicDns = false;
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "natus";
                key = "blanditiis";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "accusamus";
                uploadType = "molestiae";
                uploadProtocol = "omnis";
                userIp = "corporis";
            }};            

            ComputeInstancesUpdateAccessConfigResponse res = sdk.instances.computeInstancesUpdateAccessConfig(req, new ComputeInstancesUpdateAccessConfigSecurity() {{
                option1 = new ComputeInstancesUpdateAccessConfigSecurityOption1("tenetur", "accusantium") {{
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

## computeInstancesUpdateDisplayDevice

Updates the Display config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateDisplayDeviceRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateDisplayDeviceResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateDisplayDeviceSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateDisplayDeviceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateDisplayDeviceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisplayDevice;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateDisplayDeviceRequest req = new ComputeInstancesUpdateDisplayDeviceRequest("debitis", "exercitationem", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                displayDevice = new DisplayDevice() {{
                    enableDisplay = false;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "nam";
                key = "delectus";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "pariatur";
                requestId = "magni";
                uploadType = "tempore";
                uploadProtocol = "dolore";
                userIp = "laboriosam";
            }};            

            ComputeInstancesUpdateDisplayDeviceResponse res = sdk.instances.computeInstancesUpdateDisplayDevice(req, new ComputeInstancesUpdateDisplayDeviceSecurity() {{
                option1 = new ComputeInstancesUpdateDisplayDeviceSecurityOption1("aut", "cupiditate") {{
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

## computeInstancesUpdateNetworkInterface

Updates an instance's network interface. This method can only update an interface's alias IP range and attached network. See Modifying alias IP ranges for an existing instance for instructions on changing alias IP ranges. See Migrating a VM between networks for instructions on migrating an interface. This method follows PATCH semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateNetworkInterfaceRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateNetworkInterfaceResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateNetworkInterfaceSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateNetworkInterfaceSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateNetworkInterfaceSecurityOption2;
import org.openapis.openapi.models.shared.AccessConfig;
import org.openapis.openapi.models.shared.AccessConfigNetworkTierEnum;
import org.openapis.openapi.models.shared.AccessConfigTypeEnum;
import org.openapis.openapi.models.shared.AliasIpRange;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkInterface;
import org.openapis.openapi.models.shared.NetworkInterfaceIpv6AccessTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceNicTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceStackTypeEnum;
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterface;
import org.openapis.openapi.models.shared.NetworkInterfaceSubInterfaceIpAllocationModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateNetworkInterfaceRequest req = new ComputeInstancesUpdateNetworkInterfaceRequest("odio", "earum", "reiciendis", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                networkInterface1 = new NetworkInterface() {{
                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "est";
                            externalIpv6PrefixLength = 532022;
                            kind = "quibusdam";
                            name = "Miss Amos Goyette";
                            natIP = "quibusdam";
                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                            publicDnsName = "voluptatum";
                            publicPtrDomainName = "enim";
                            securityPolicy = "perferendis";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "tenetur";
                            externalIpv6PrefixLength = 368239;
                            kind = "dolorum";
                            name = "Sadie Roberts";
                            natIP = "facilis";
                            networkTier = AccessConfigNetworkTierEnum.SELECT;
                            publicDnsName = "blanditiis";
                            publicPtrDomainName = "commodi";
                            securityPolicy = "eaque";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                    }};
                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                        add(new AliasIpRange() {{
                            ipCidrRange = "voluptates";
                            subnetworkRangeName = "similique";
                        }}),
                        add(new AliasIpRange() {{
                            ipCidrRange = "autem";
                            subnetworkRangeName = "nobis";
                        }}),
                        add(new AliasIpRange() {{
                            ipCidrRange = "laboriosam";
                            subnetworkRangeName = "non";
                        }}),
                        add(new AliasIpRange() {{
                            ipCidrRange = "corporis";
                            subnetworkRangeName = "ab";
                        }}),
                    }};
                    fingerprint = "nesciunt";
                    internalIpv6PrefixLength = 179221;
                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "ipsam";
                            externalIpv6PrefixLength = 230161;
                            kind = "sit";
                            name = "Mr. Shane Sauer";
                            natIP = "blanditiis";
                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                            publicDnsName = "ex";
                            publicPtrDomainName = "dolorum";
                            securityPolicy = "illo";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "possimus";
                            externalIpv6PrefixLength = 266727;
                            kind = "ex";
                            name = "Brittany Purdy";
                            natIP = "reprehenderit";
                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                            publicDnsName = "ipsam";
                            publicPtrDomainName = "perspiciatis";
                            securityPolicy = "molestias";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "corporis";
                            externalIpv6PrefixLength = 870465;
                            kind = "eligendi";
                            name = "Marianne Swift";
                            natIP = "quisquam";
                            networkTier = AccessConfigNetworkTierEnum.SELECT;
                            publicDnsName = "atque";
                            publicPtrDomainName = "libero";
                            securityPolicy = "possimus";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "modi";
                            externalIpv6PrefixLength = 522246;
                            kind = "voluptates";
                            name = "Reginald Veum";
                            natIP = "magni";
                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                            publicDnsName = "accusantium";
                            publicPtrDomainName = "distinctio";
                            securityPolicy = "et";
                            setPublicDns = false;
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                    }};
                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                    ipv6Address = "eum";
                    kind = "impedit";
                    name = "Earnest Adams";
                    network = "omnis";
                    networkAttachment = "nulla";
                    networkIP = "sed";
                    nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                    parentNicName = "quibusdam";
                    queueCount = 854641;
                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                    subinterfaces = new org.openapis.openapi.models.shared.NetworkInterfaceSubInterface[]{{
                        add(new NetworkInterfaceSubInterface() {{
                            ipAddress = "ullam";
                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.DO_NOT_ALLOCATE_IP;
                            subnetwork = "fugiat";
                            vlan = 835995;
                        }}),
                        add(new NetworkInterfaceSubInterface() {{
                            ipAddress = "expedita";
                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.ALLOCATE_IP;
                            subnetwork = "autem";
                            vlan = 377369;
                        }}),
                        add(new NetworkInterfaceSubInterface() {{
                            ipAddress = "nemo";
                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                            subnetwork = "nesciunt";
                            vlan = 73149;
                        }}),
                        add(new NetworkInterfaceSubInterface() {{
                            ipAddress = "dolores";
                            ipAllocationMode = NetworkInterfaceSubInterfaceIpAllocationModeEnum.UNSPECIFIED;
                            subnetwork = "voluptate";
                            vlan = 962015;
                        }}),
                    }};
                    subnetwork = "ipsam";
                    vlan = 351873;
                }};;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "iusto";
                key = "aspernatur";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "veritatis";
                uploadType = "iusto";
                uploadProtocol = "aliquid";
                userIp = "qui";
            }};            

            ComputeInstancesUpdateNetworkInterfaceResponse res = sdk.instances.computeInstancesUpdateNetworkInterface(req, new ComputeInstancesUpdateNetworkInterfaceSecurity() {{
                option1 = new ComputeInstancesUpdateNetworkInterfaceSecurityOption1("error", "consequuntur") {{
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

## computeInstancesUpdateShieldedInstanceConfig

Updates the Shielded Instance config for an instance. You can only use this method on a stopped instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedInstanceConfigRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedInstanceConfigResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedInstanceConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedInstanceConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateShieldedInstanceConfigRequest req = new ComputeInstancesUpdateShieldedInstanceConfigRequest("nulla", "facere", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                    enableIntegrityMonitoring = false;
                    enableSecureBoot = false;
                    enableVtpm = false;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "in";
                key = "dicta";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "quos";
                uploadType = "quo";
                uploadProtocol = "dicta";
                userIp = "numquam";
            }};            

            ComputeInstancesUpdateShieldedInstanceConfigResponse res = sdk.instances.computeInstancesUpdateShieldedInstanceConfig(req, new ComputeInstancesUpdateShieldedInstanceConfigSecurity() {{
                option1 = new ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1("ab", "quos") {{
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

## computeInstancesUpdateShieldedVmConfig

Updates the Shielded VM config for a VM instance. You can only use this method on a stopped VM instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedVmConfigRequest;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedVmConfigResponse;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedVmConfigSecurity;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedVmConfigSecurityOption1;
import org.openapis.openapi.models.operations.ComputeInstancesUpdateShieldedVmConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateShieldedVmConfigRequest req = new ComputeInstancesUpdateShieldedVmConfigRequest("modi", "vitae", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                shieldedVmConfig = new ShieldedVmConfig() {{
                    enableIntegrityMonitoring = false;
                    enableSecureBoot = false;
                    enableVtpm = false;
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "voluptate";
                key = "repudiandae";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "aut";
                uploadType = "ratione";
                uploadProtocol = "deserunt";
                userIp = "error";
            }};            

            ComputeInstancesUpdateShieldedVmConfigResponse res = sdk.instances.computeInstancesUpdateShieldedVmConfig(req, new ComputeInstancesUpdateShieldedVmConfigSecurity() {{
                option1 = new ComputeInstancesUpdateShieldedVmConfigSecurityOption1("voluptatum", "aut") {{
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
