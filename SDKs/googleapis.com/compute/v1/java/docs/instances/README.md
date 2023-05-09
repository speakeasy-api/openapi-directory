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
* [computeInstancesInsert](#computeinstancesinsert) - Creates an instance resource in the specified project using the data included in the request.
* [computeInstancesList](#computeinstanceslist) - Retrieves the list of instances contained within the specified zone.
* [computeInstancesListReferrers](#computeinstanceslistreferrers) - Retrieves a list of resources that refer to the VM instance specified in the request. For example, if the VM instance is part of a managed or unmanaged instance group, the referrers list includes the instance group. For more information, read Viewing referrers to VM instances.
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
* [computeInstancesSetServiceAccount](#computeinstancessetserviceaccount) - Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
* [computeInstancesSetShieldedInstanceIntegrityPolicy](#computeinstancessetshieldedinstanceintegritypolicy) - Sets the Shielded Instance integrity policy for an instance. You can only use this method on a running instance. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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

            ComputeInstancesAddAccessConfigRequest req = new ComputeInstancesAddAccessConfigRequest("aliquam", "similique", "voluptatum", "corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "commodi";
                    externalIpv6PrefixLength = 416884;
                    kind = "quis";
                    name = "Tyrone Ruecker Sr.";
                    natIP = "dolorem";
                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                    publicPtrDomainName = "maxime";
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "quibusdam";
                key = "veniam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "animi";
                uploadType = "mollitia";
                uploadProtocol = "autem";
                userIp = "illum";
            }};            

            ComputeInstancesAddAccessConfigResponse res = sdk.instances.computeInstancesAddAccessConfig(req, new ComputeInstancesAddAccessConfigSecurity() {{
                option1 = new ComputeInstancesAddAccessConfigSecurityOption1("at", "hic") {{
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

            ComputeInstancesAddResourcePoliciesRequest req = new ComputeInstancesAddResourcePoliciesRequest("nemo", "laborum", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesAddResourcePoliciesRequest = new InstancesAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("eius"),
                        add("atque"),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "reiciendis";
                key = "impedit";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "voluptatum";
                uploadType = "ex";
                uploadProtocol = "aspernatur";
                userIp = "est";
            }};            

            ComputeInstancesAddResourcePoliciesResponse res = sdk.instances.computeInstancesAddResourcePolicies(req, new ComputeInstancesAddResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesAddResourcePoliciesSecurityOption1("voluptatem", "aut") {{
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

            ComputeInstancesAggregatedListRequest req = new ComputeInstancesAggregatedListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "saepe";
                filter = "illo";
                includeAllScopes = false;
                key = "aperiam";
                maxResults = 61728L;
                oauthToken = "veritatis";
                orderBy = "enim";
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "suscipit";
                returnPartialSuccess = false;
                uploadType = "dolor";
                uploadProtocol = "alias";
                userIp = "libero";
            }};            

            ComputeInstancesAggregatedListResponse res = sdk.instances.computeInstancesAggregatedList(req, new ComputeInstancesAggregatedListSecurity() {{
                option1 = new ComputeInstancesAggregatedListSecurityOption1("quibusdam", "fuga") {{
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
import org.openapis.openapi.models.shared.AttachedDiskInitializeParamsOnUpdateActionEnum;
import org.openapis.openapi.models.shared.AttachedDiskInterfaceEnum;
import org.openapis.openapi.models.shared.AttachedDiskModeEnum;
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

            ComputeInstancesAttachDiskRequest req = new ComputeInstancesAttachDiskRequest("nihil", "similique", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                attachedDisk = new AttachedDisk() {{
                    architecture = AttachedDiskArchitectureEnum.X8664;
                    autoDelete = false;
                    boot = false;
                    deviceName = "illum";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "blanditiis";
                        kmsKeyServiceAccount = "tempora";
                        rawKey = "similique";
                        rsaEncryptedKey = "dolor";
                        sha256 = "enim";
                    }};;
                    diskSizeGb = "dolorum";
                    forceAttach = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                    }};
                    index = 202246;
                    initializeParams = new AttachedDiskInitializeParams() {{
                        architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                        description = "officiis";
                        diskName = "inventore";
                        diskSizeGb = "officia";
                        diskType = "in";
                        labels = new java.util.HashMap<String, String>() {{
                            put("ad", "fuga");
                        }};
                        licenses = new String[]{{
                            add("qui"),
                            add("suscipit"),
                            add("officia"),
                            add("saepe"),
                        }};
                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                        provisionedIops = "ratione";
                        provisionedThroughput = "expedita";
                        replicaZones = new String[]{{
                            add("maiores"),
                            add("provident"),
                            add("dignissimos"),
                            add("dicta"),
                        }};
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("blanditiis", "repellat");
                            put("modi", "ex");
                            put("nobis", "placeat");
                        }};
                        resourcePolicies = new String[]{{
                            add("architecto"),
                            add("quae"),
                            add("aut"),
                        }};
                        sourceImage = "commodi";
                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "delectus";
                            kmsKeyServiceAccount = "officiis";
                            rawKey = "omnis";
                            rsaEncryptedKey = "ea";
                            sha256 = "ipsam";
                        }};;
                        sourceSnapshot = "soluta";
                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "esse";
                            kmsKeyServiceAccount = "vitae";
                            rawKey = "beatae";
                            rsaEncryptedKey = "pariatur";
                            sha256 = "voluptatem";
                        }};;
                    }};;
                    interface_ = AttachedDiskInterfaceEnum.SCSI;
                    kind = "eligendi";
                    licenses = new String[]{{
                        add("deleniti"),
                        add("deleniti"),
                        add("necessitatibus"),
                        add("cumque"),
                    }};
                    mode = AttachedDiskModeEnum.READ_WRITE;
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "nihil";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "perspiciatis";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "officia";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "quis";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "eum";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "commodi";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "possimus";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "velit";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "cum";
                            fileType = FileContentBufferFileTypeEnum.BIN;
                        }};;
                    }};;
                    source = "quo";
                    type = AttachedDiskTypeEnum.SCRATCH;
                }};;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "autem";
                forceAttach = false;
                key = "quis";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "qui";
                uploadType = "officia";
                uploadProtocol = "cupiditate";
                userIp = "rem";
            }};            

            ComputeInstancesAttachDiskResponse res = sdk.instances.computeInstancesAttachDisk(req, new ComputeInstancesAttachDiskSecurity() {{
                option1 = new ComputeInstancesAttachDiskSecurityOption1("ea", "debitis") {{
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
import org.openapis.openapi.models.shared.BulkInsertInstanceResource;
import org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties;
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
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesBulkInsertRequest req = new ComputeInstancesBulkInsertRequest("soluta", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "beatae";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 295651;
                            visibleCoreCount = 790842;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "mollitia";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARM64;
                                autoDelete = false;
                                boot = false;
                                deviceName = "non";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "doloremque";
                                    kmsKeyServiceAccount = "atque";
                                    rawKey = "natus";
                                    rsaEncryptedKey = "beatae";
                                    sha256 = "nemo";
                                }};
                                diskSizeGb = "eaque";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                index = 472280;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                    description = "et";
                                    diskName = "unde";
                                    diskSizeGb = "similique";
                                    diskType = "eius";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("delectus", "blanditiis");
                                        put("laudantium", "earum");
                                        put("impedit", "accusamus");
                                    }};
                                    licenses = new String[]{{
                                        add("expedita"),
                                        add("hic"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "perferendis";
                                    provisionedThroughput = "non";
                                    replicaZones = new String[]{{
                                        add("consequatur"),
                                        add("architecto"),
                                        add("dicta"),
                                        add("sit"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "sequi");
                                        put("laudantium", "excepturi");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("deleniti"),
                                    }};
                                    sourceImage = "quasi";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "laboriosam";
                                        kmsKeyServiceAccount = "aspernatur";
                                        rawKey = "quod";
                                        rsaEncryptedKey = "suscipit";
                                        sha256 = "tempore";
                                    }};
                                    sourceSnapshot = "recusandae";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "harum";
                                        kmsKeyServiceAccount = "nisi";
                                        rawKey = "blanditiis";
                                        rsaEncryptedKey = "culpa";
                                        sha256 = "doloremque";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "vel";
                                licenses = new String[]{{
                                    add("ducimus"),
                                    add("quidem"),
                                }};
                                mode = AttachedDiskModeEnum.READ_ONLY;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "alias";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "mollitia";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "numquam";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "aperiam";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "at";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ipsum";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "tenetur";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "cupiditate";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "atque";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "aut";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "architecto";
                                type = AttachedDiskTypeEnum.SCRATCH;
                            }}),
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.X8664;
                                autoDelete = false;
                                boot = false;
                                deviceName = "unde";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "voluptate";
                                    kmsKeyServiceAccount = "debitis";
                                    rawKey = "sunt";
                                    rsaEncryptedKey = "ad";
                                    sha256 = "quia";
                                }};
                                diskSizeGb = "aspernatur";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                index = 25705;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                    description = "culpa";
                                    diskName = "voluptatum";
                                    diskSizeGb = "voluptatem";
                                    diskType = "amet";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("explicabo", "quia");
                                    }};
                                    licenses = new String[]{{
                                        add("fugit"),
                                        add("nobis"),
                                        add("optio"),
                                    }};
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "quasi";
                                    provisionedThroughput = "porro";
                                    replicaZones = new String[]{{
                                        add("laborum"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("eaque", "odit");
                                        put("distinctio", "soluta");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("odio"),
                                        add("repudiandae"),
                                        add("accusamus"),
                                    }};
                                    sourceImage = "quasi";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "accusantium";
                                        kmsKeyServiceAccount = "dolores";
                                        rawKey = "fugiat";
                                        rsaEncryptedKey = "id";
                                        sha256 = "sed";
                                    }};
                                    sourceSnapshot = "fugiat";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "recusandae";
                                        kmsKeyServiceAccount = "neque";
                                        rawKey = "minima";
                                        rsaEncryptedKey = "tenetur";
                                        sha256 = "praesentium";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "sit";
                                licenses = new String[]{{
                                    add("libero"),
                                }};
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "adipisci";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "id";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "ut";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eius";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "dolorum";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "sunt";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }};
                                }};
                                source = "voluptatem";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                            }}),
                        }};
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 952820;
                                acceleratorType = "vitae";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 802241;
                                acceleratorType = "placeat";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 586303;
                                acceleratorType = "asperiores";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.STOP;
                        labels = new java.util.HashMap<String, String>() {{
                            put("dicta", "deserunt");
                            put("laborum", "itaque");
                        }};
                        machineType = "ad";
                        metadata = new Metadata() {{
                            fingerprint = "voluptates";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "quaerat";
                                    value = "delectus";
                                }}),
                                add(new MetadataItems() {{
                                    key = "sit";
                                    value = "porro";
                                }}),
                                add(new MetadataItems() {{
                                    key = "labore";
                                    value = "molestias";
                                }}),
                            }};
                            kind = "qui";
                        }};;
                        minCpuPlatform = "soluta";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ut";
                                        externalIpv6PrefixLength = 279945;
                                        kind = "quibusdam";
                                        name = "Hilda Pagac";
                                        natIP = "laboriosam";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "est";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "accusamus";
                                        externalIpv6PrefixLength = 891294;
                                        kind = "esse";
                                        name = "Phil Emmerich";
                                        natIP = "illo";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "placeat";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "tempore";
                                        subnetworkRangeName = "voluptates";
                                    }}),
                                }};
                                fingerprint = "cumque";
                                internalIpv6PrefixLength = 717836;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "consectetur";
                                        externalIpv6PrefixLength = 858802;
                                        kind = "magni";
                                        name = "Joy Lind";
                                        natIP = "neque";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "sapiente";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sed";
                                        externalIpv6PrefixLength = 222093;
                                        kind = "nulla";
                                        name = "Miss Frederick Hane";
                                        natIP = "rem";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "error";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "natus";
                                        externalIpv6PrefixLength = 320259;
                                        kind = "cum";
                                        name = "Ms. Jermaine Kozey";
                                        natIP = "eaque";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "rerum";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "repudiandae";
                                kind = "minus";
                                name = "Ivan Johnston";
                                network = "sunt";
                                networkAttachment = "amet";
                                networkIP = "laudantium";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 954344;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "qui";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "perspiciatis";
                                        externalIpv6PrefixLength = 431723;
                                        kind = "sint";
                                        name = "Randall Schamberger";
                                        natIP = "quidem";
                                        networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                        publicPtrDomainName = "praesentium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "error";
                                        externalIpv6PrefixLength = 3510;
                                        kind = "deserunt";
                                        name = "Miranda Stamm";
                                        natIP = "corrupti";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "quibusdam";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "dicta";
                                        externalIpv6PrefixLength = 20735;
                                        kind = "asperiores";
                                        name = "Earnest Crooks";
                                        natIP = "voluptatibus";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "amet";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "pariatur";
                                        externalIpv6PrefixLength = 641254;
                                        kind = "velit";
                                        name = "Owen Rice DVM";
                                        natIP = "est";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "iste";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "optio";
                                        subnetworkRangeName = "minus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "sint";
                                        subnetworkRangeName = "aliquam";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "consectetur";
                                        subnetworkRangeName = "ullam";
                                    }}),
                                }};
                                fingerprint = "dicta";
                                internalIpv6PrefixLength = 201816;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "esse";
                                        externalIpv6PrefixLength = 166811;
                                        kind = "ea";
                                        name = "Peter Hand";
                                        natIP = "dicta";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "quos";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ratione";
                                        externalIpv6PrefixLength = 685110;
                                        kind = "minima";
                                        name = "Ernestine Hudson IV";
                                        natIP = "alias";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "tenetur";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "accusamus";
                                kind = "cum";
                                name = "Blake Jakubowski";
                                network = "atque";
                                networkAttachment = "saepe";
                                networkIP = "eum";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 684196;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "nam";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                            key = "illum";
                            values = new String[]{{
                                add("totam"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quibusdam", "harum");
                        }};
                        resourcePolicies = new String[]{{
                            add("porro"),
                            add("ducimus"),
                            add("ad"),
                            add("optio"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
                            locationHint = "corrupti";
                            minNodeCpus = 793068;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "aut";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("cupiditate"),
                                        add("aliquam"),
                                    }};
                                }}),
                                add(new SchedulingNodeAffinity() {{
                                    key = "suscipit";
                                    operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                    values = new String[]{{
                                        add("debitis"),
                                        add("neque"),
                                        add("doloremque"),
                                        add("tempora"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Lacey_Quitzon12@gmail.com";
                                scopes = new String[]{{
                                    add("incidunt"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Darby_Erdman@hotmail.com";
                                scopes = new String[]{{
                                    add("iure"),
                                    add("libero"),
                                    add("cum"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Pablo_Kautzer@gmail.com";
                                scopes = new String[]{{
                                    add("quam"),
                                }};
                            }}),
                        }};
                        shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                            enableIntegrityMonitoring = false;
                            enableSecureBoot = false;
                            enableVtpm = false;
                        }};;
                        tags = new Tags() {{
                            fingerprint = "fugit";
                            items = new String[]{{
                                add("libero"),
                                add("vitae"),
                                add("non"),
                                add("labore"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("tempore", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 644817;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                            put("doloribus", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 443153;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.DENY;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.BALANCED;
                    }};;
                    minCount = "quis";
                    namePattern = "impedit";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("necessitatibus", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Ron Padberg";
                        }});
                    }};
                    sourceInstanceTemplate = "suscipit";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "iusto";
                key = "aspernatur";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "architecto";
                requestId = "earum";
                uploadType = "cum";
                uploadProtocol = "alias";
                userIp = "quod";
            }};            

            ComputeInstancesBulkInsertResponse res = sdk.instances.computeInstancesBulkInsert(req, new ComputeInstancesBulkInsertSecurity() {{
                option1 = new ComputeInstancesBulkInsertSecurityOption1("veniam", "corrupti") {{
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

            ComputeInstancesDeleteRequest req = new ComputeInstancesDeleteRequest("temporibus", "odit", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "cupiditate";
                key = "ex";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "expedita";
                uploadType = "modi";
                uploadProtocol = "expedita";
                userIp = "quaerat";
            }};            

            ComputeInstancesDeleteResponse res = sdk.instances.computeInstancesDelete(req, new ComputeInstancesDeleteSecurity() {{
                option1 = new ComputeInstancesDeleteSecurityOption1("accusantium", "recusandae") {{
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

            ComputeInstancesDeleteAccessConfigRequest req = new ComputeInstancesDeleteAccessConfigRequest("saepe", "sapiente", "iusto", "quasi", "odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "similique";
                key = "expedita";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "tempora";
                uploadType = "modi";
                uploadProtocol = "soluta";
                userIp = "inventore";
            }};            

            ComputeInstancesDeleteAccessConfigResponse res = sdk.instances.computeInstancesDeleteAccessConfig(req, new ComputeInstancesDeleteAccessConfigSecurity() {{
                option1 = new ComputeInstancesDeleteAccessConfigSecurityOption1("ducimus", "vitae") {{
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

            ComputeInstancesDetachDiskRequest req = new ComputeInstancesDetachDiskRequest("sit", "autem", "rem", "deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "necessitatibus";
                key = "asperiores";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "quam";
                uploadType = "earum";
                uploadProtocol = "velit";
                userIp = "fugiat";
            }};            

            ComputeInstancesDetachDiskResponse res = sdk.instances.computeInstancesDetachDisk(req, new ComputeInstancesDetachDiskSecurity() {{
                option1 = new ComputeInstancesDetachDiskSecurityOption1("pariatur", "voluptatem") {{
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

            ComputeInstancesGetRequest req = new ComputeInstancesGetRequest("quod", "minus", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "dicta";
                key = "rerum";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "aliquam";
                uploadProtocol = "voluptates";
                userIp = "alias";
            }};            

            ComputeInstancesGetResponse res = sdk.instances.computeInstancesGet(req, new ComputeInstancesGetSecurity() {{
                option1 = new ComputeInstancesGetSecurityOption1("voluptatum", "aut") {{
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

            ComputeInstancesGetEffectiveFirewallsRequest req = new ComputeInstancesGetEffectiveFirewallsRequest("officia", "officia", "vitae", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "accusamus";
                key = "optio";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "provident";
                uploadProtocol = "officiis";
                userIp = "ipsa";
            }};            

            ComputeInstancesGetEffectiveFirewallsResponse res = sdk.instances.computeInstancesGetEffectiveFirewalls(req, new ComputeInstancesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeInstancesGetEffectiveFirewallsSecurityOption1("eos", "delectus") {{
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

            ComputeInstancesGetGuestAttributesRequest req = new ComputeInstancesGetGuestAttributesRequest("dolor", "dignissimos", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "laudantium";
                key = "recusandae";
                oauthToken = "odit";
                prettyPrint = false;
                queryPath = "fugiat";
                quotaUser = "sequi";
                uploadType = "consequatur";
                uploadProtocol = "voluptates";
                userIp = "culpa";
                variableKey = "at";
            }};            

            ComputeInstancesGetGuestAttributesResponse res = sdk.instances.computeInstancesGetGuestAttributes(req, new ComputeInstancesGetGuestAttributesSecurity() {{
                option1 = new ComputeInstancesGetGuestAttributesSecurityOption1("dolorem", "sunt") {{
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

            ComputeInstancesGetIamPolicyRequest req = new ComputeInstancesGetIamPolicyRequest("ipsa", "incidunt", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "alias";
                key = "molestiae";
                oauthToken = "rerum";
                optionsRequestedPolicyVersion = 972620L;
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "ducimus";
                uploadProtocol = "minima";
                userIp = "libero";
            }};            

            ComputeInstancesGetIamPolicyResponse res = sdk.instances.computeInstancesGetIamPolicy(req, new ComputeInstancesGetIamPolicySecurity() {{
                option1 = new ComputeInstancesGetIamPolicySecurityOption1("ut", "tempora") {{
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

            ComputeInstancesGetScreenshotRequest req = new ComputeInstancesGetScreenshotRequest("sed", "quas", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "nulla";
                key = "libero";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "eum";
                uploadProtocol = "sint";
                userIp = "eveniet";
            }};            

            ComputeInstancesGetScreenshotResponse res = sdk.instances.computeInstancesGetScreenshot(req, new ComputeInstancesGetScreenshotSecurity() {{
                option1 = new ComputeInstancesGetScreenshotSecurityOption1("veniam", "unde") {{
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

            ComputeInstancesGetSerialPortOutputRequest req = new ComputeInstancesGetSerialPortOutputRequest("consequuntur", "laboriosam", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "optio";
                key = "voluptatum";
                oauthToken = "pariatur";
                port = 194850L;
                prettyPrint = false;
                quotaUser = "quo";
                start = "facere";
                uploadType = "labore";
                uploadProtocol = "fugit";
                userIp = "quis";
            }};            

            ComputeInstancesGetSerialPortOutputResponse res = sdk.instances.computeInstancesGetSerialPortOutput(req, new ComputeInstancesGetSerialPortOutputSecurity() {{
                option1 = new ComputeInstancesGetSerialPortOutputSecurityOption1("voluptatum", "temporibus") {{
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

            ComputeInstancesGetShieldedInstanceIdentityRequest req = new ComputeInstancesGetShieldedInstanceIdentityRequest("doloremque", "amet", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "placeat";
                key = "rem";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "repellat";
                uploadProtocol = "eveniet";
                userIp = "odit";
            }};            

            ComputeInstancesGetShieldedInstanceIdentityResponse res = sdk.instances.computeInstancesGetShieldedInstanceIdentity(req, new ComputeInstancesGetShieldedInstanceIdentitySecurity() {{
                option1 = new ComputeInstancesGetShieldedInstanceIdentitySecurityOption1("quam", "ullam") {{
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
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.InstanceKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstanceParams;
import org.openapis.openapi.models.shared.InstancePrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceStatusEnum;
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
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesInsertRequest req = new ComputeInstancesInsertRequest("inventore", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                instance = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        threadsPerCore = 19487;
                        visibleCoreCount = 275608;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "ducimus";
                    creationTimestamp = "quod";
                    deletionProtection = false;
                    description = "aut";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            autoDelete = false;
                            boot = false;
                            deviceName = "omnis";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "repudiandae";
                                kmsKeyServiceAccount = "inventore";
                                rawKey = "quaerat";
                                rsaEncryptedKey = "nesciunt";
                                sha256 = "hic";
                            }};
                            diskSizeGb = "natus";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                }}),
                            }};
                            index = 715543;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                description = "in";
                                diskName = "repellendus";
                                diskSizeGb = "incidunt";
                                diskType = "aperiam";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("corporis", "laborum");
                                    put("quae", "quae");
                                    put("voluptatibus", "est");
                                    put("modi", "nesciunt");
                                }};
                                licenses = new String[]{{
                                    add("repudiandae"),
                                    add("commodi"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "exercitationem";
                                provisionedThroughput = "natus";
                                replicaZones = new String[]{{
                                    add("velit"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("hic", "natus");
                                }};
                                resourcePolicies = new String[]{{
                                    add("minus"),
                                    add("provident"),
                                }};
                                sourceImage = "quibusdam";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "explicabo";
                                    kmsKeyServiceAccount = "adipisci";
                                    rawKey = "iusto";
                                    rsaEncryptedKey = "ratione";
                                    sha256 = "omnis";
                                }};
                                sourceSnapshot = "quam";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "impedit";
                                    kmsKeyServiceAccount = "iusto";
                                    rawKey = "quas";
                                    rsaEncryptedKey = "nemo";
                                    sha256 = "facilis";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "nulla";
                            licenses = new String[]{{
                                add("magnam"),
                                add("maiores"),
                                add("quis"),
                            }};
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "vitae";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "reiciendis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "vero";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ea";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "aliquid";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "reprehenderit";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "accusantium";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "deserunt";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "facilis";
                                kmsKeyServiceAccount = "in";
                                rawKey = "ad";
                                rsaEncryptedKey = "voluptatem";
                                sha256 = "sit";
                            }};
                            diskSizeGb = "enim";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                }}),
                            }};
                            index = 322703;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "dolore";
                                diskName = "in";
                                diskSizeGb = "officiis";
                                diskType = "fugiat";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("tempora", "sequi");
                                    put("natus", "saepe");
                                    put("quibusdam", "corrupti");
                                    put("maxime", "aliquam");
                                }};
                                licenses = new String[]{{
                                    add("explicabo"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "hic";
                                provisionedThroughput = "incidunt";
                                replicaZones = new String[]{{
                                    add("eos"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "temporibus");
                                    put("aliquam", "incidunt");
                                }};
                                resourcePolicies = new String[]{{
                                    add("iusto"),
                                    add("mollitia"),
                                    add("porro"),
                                }};
                                sourceImage = "voluptas";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "provident";
                                    kmsKeyServiceAccount = "neque";
                                    rawKey = "expedita";
                                    rsaEncryptedKey = "excepturi";
                                    sha256 = "quaerat";
                                }};
                                sourceSnapshot = "nobis";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "nesciunt";
                                    kmsKeyServiceAccount = "quidem";
                                    rawKey = "unde";
                                    rsaEncryptedKey = "fugiat";
                                    sha256 = "magni";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "atque";
                            licenses = new String[]{{
                                add("quibusdam"),
                                add("odio"),
                                add("unde"),
                            }};
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "fuga";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "aspernatur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "maxime";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "corporis";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "omnis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "vel";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "animi";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "doloremque";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    fingerprint = "pariatur";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 77657;
                            acceleratorType = "odit";
                        }}),
                    }};
                    hostname = "flamboyant-nightclub.biz";
                    id = "ullam";
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                    kind = "atque";
                    labelFingerprint = "quasi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("fugiat", "odio");
                        put("quo", "ipsum");
                        put("cum", "et");
                    }};
                    lastStartTimestamp = "harum";
                    lastStopTimestamp = "magnam";
                    lastSuspendedTimestamp = "illo";
                    machineType = "atque";
                    metadata = new Metadata() {{
                        fingerprint = "magnam";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "consequatur";
                                value = "nisi";
                            }}),
                            add(new MetadataItems() {{
                                key = "quae";
                                value = "saepe";
                            }}),
                        }};
                        kind = "accusantium";
                    }};;
                    minCpuPlatform = "sit";
                    name = "Carolyn Bednar I";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "quod";
                                    externalIpv6PrefixLength = 624852;
                                    kind = "ipsa";
                                    name = "Melba Harvey";
                                    natIP = "pariatur";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "id";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "quo";
                                    externalIpv6PrefixLength = 307309;
                                    kind = "magnam";
                                    name = "Jesus Kerluke";
                                    natIP = "molestias";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "praesentium";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "eos";
                                    externalIpv6PrefixLength = 333845;
                                    kind = "amet";
                                    name = "Byron McKenzie";
                                    natIP = "delectus";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicPtrDomainName = "quos";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "eum";
                                    externalIpv6PrefixLength = 699962;
                                    kind = "a";
                                    name = "Catherine Vandervort";
                                    natIP = "exercitationem";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "fugiat";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "nesciunt";
                                    subnetworkRangeName = "aliquam";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "consectetur";
                                    subnetworkRangeName = "at";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "suscipit";
                                    subnetworkRangeName = "quae";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quam";
                                    subnetworkRangeName = "dignissimos";
                                }}),
                            }};
                            fingerprint = "atque";
                            internalIpv6PrefixLength = 654684;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "quaerat";
                                    externalIpv6PrefixLength = 569960;
                                    kind = "ab";
                                    name = "Carrie Klocko";
                                    natIP = "enim";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "commodi";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "et";
                                    externalIpv6PrefixLength = 610557;
                                    kind = "aut";
                                    name = "Mr. Ignacio Mueller";
                                    natIP = "labore";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "ullam";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "recusandae";
                                    externalIpv6PrefixLength = 321263;
                                    kind = "omnis";
                                    name = "Simon Kozey III";
                                    natIP = "ea";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicPtrDomainName = "voluptatem";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "delectus";
                                    externalIpv6PrefixLength = 91007;
                                    kind = "optio";
                                    name = "Tim Mitchell";
                                    natIP = "aliquid";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "enim";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "beatae";
                            kind = "repudiandae";
                            name = "Tara Pouros";
                            network = "quia";
                            networkAttachment = "laboriosam";
                            networkIP = "deleniti";
                            nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            queueCount = 493734;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "provident";
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("qui", "nulla");
                            put("velit", "amet");
                            put("ipsam", "suscipit");
                        }};
                    }};;
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                        key = "accusamus";
                        values = new String[]{{
                            add("velit"),
                            add("earum"),
                            add("recusandae"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("impedit"),
                        add("reiciendis"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "ad";
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
                        locationHint = "delectus";
                        minNodeCpus = 211246;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "voluptatum";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("earum"),
                                    add("est"),
                                    add("quisquam"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "officia";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("consequuntur"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                    }};;
                    selfLink = "adipisci";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Wilhelm_Kutch10@hotmail.com";
                            scopes = new String[]{{
                                add("minus"),
                                add("molestias"),
                                add("quam"),
                                add("nihil"),
                            }};
                        }}),
                    }};
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "inventore";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ex";
                        kmsKeyServiceAccount = "maxime";
                        rawKey = "deleniti";
                        rsaEncryptedKey = "accusantium";
                        sha256 = "sed";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.SUSPENDED;
                    statusMessage = "quisquam";
                    tags = new Tags() {{
                        fingerprint = "sint";
                        items = new String[]{{
                            add("alias"),
                            add("placeat"),
                            add("in"),
                            add("possimus"),
                        }};
                    }};;
                    zone = "iste";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "consectetur";
                key = "repellat";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "est";
                sourceInstanceTemplate = "autem";
                sourceMachineImage = "sequi";
                uploadType = "officiis";
                uploadProtocol = "nulla";
                userIp = "occaecati";
            }};            

            ComputeInstancesInsertResponse res = sdk.instances.computeInstancesInsert(req, new ComputeInstancesInsertSecurity() {{
                option1 = new ComputeInstancesInsertSecurityOption1("optio", "asperiores") {{
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

            ComputeInstancesListRequest req = new ComputeInstancesListRequest("et", "nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "quo";
                filter = "libero";
                key = "id";
                maxResults = 312991L;
                oauthToken = "inventore";
                orderBy = "accusamus";
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "odit";
                returnPartialSuccess = false;
                uploadType = "numquam";
                uploadProtocol = "nemo";
                userIp = "numquam";
            }};            

            ComputeInstancesListResponse res = sdk.instances.computeInstancesList(req, new ComputeInstancesListSecurity() {{
                option1 = new ComputeInstancesListSecurityOption1("culpa", "aliquam") {{
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

            ComputeInstancesListReferrersRequest req = new ComputeInstancesListReferrersRequest("iusto", "voluptatibus", "dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "autem";
                filter = "optio";
                key = "fugiat";
                maxResults = 817425L;
                oauthToken = "exercitationem";
                orderBy = "ut";
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "numquam";
                returnPartialSuccess = false;
                uploadType = "officia";
                uploadProtocol = "reprehenderit";
                userIp = "nemo";
            }};            

            ComputeInstancesListReferrersResponse res = sdk.instances.computeInstancesListReferrers(req, new ComputeInstancesListReferrersSecurity() {{
                option1 = new ComputeInstancesListReferrersSecurityOption1("nisi", "consequuntur") {{
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

            ComputeInstancesRemoveResourcePoliciesRequest req = new ComputeInstancesRemoveResourcePoliciesRequest("praesentium", "iusto", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesRemoveResourcePoliciesRequest = new InstancesRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("quibusdam"),
                        add("placeat"),
                    }};
                }};;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "repellat";
                fields = "est";
                key = "doloribus";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "at";
                uploadType = "impedit";
                uploadProtocol = "autem";
                userIp = "qui";
            }};            

            ComputeInstancesRemoveResourcePoliciesResponse res = sdk.instances.computeInstancesRemoveResourcePolicies(req, new ComputeInstancesRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesRemoveResourcePoliciesSecurityOption1("consectetur", "ea") {{
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

            ComputeInstancesResetRequest req = new ComputeInstancesResetRequest("aspernatur", "consequatur", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "doloribus";
                key = "nesciunt";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "at";
                requestId = "tenetur";
                uploadType = "sequi";
                uploadProtocol = "temporibus";
                userIp = "cum";
            }};            

            ComputeInstancesResetResponse res = sdk.instances.computeInstancesReset(req, new ComputeInstancesResetSecurity() {{
                option1 = new ComputeInstancesResetSecurityOption1("sit", "magni") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesResumeRequest req = new ComputeInstancesResumeRequest("aspernatur", "earum", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "nostrum";
                fields = "delectus";
                key = "quidem";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "repellat";
                requestId = "suscipit";
                uploadType = "veniam";
                uploadProtocol = "consequuntur";
                userIp = "repudiandae";
            }};            

            ComputeInstancesResumeResponse res = sdk.instances.computeInstancesResume(req, new ComputeInstancesResumeSecurity() {{
                option1 = new ComputeInstancesResumeSecurityOption1("nam", "libero") {{
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

            ComputeInstancesSendDiagnosticInterruptRequest req = new ComputeInstancesSendDiagnosticInterruptRequest("perspiciatis", "illum", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "corrupti";
                key = "ducimus";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "fugit";
                uploadProtocol = "labore";
                userIp = "neque";
            }};            

            ComputeInstancesSendDiagnosticInterruptResponse res = sdk.instances.computeInstancesSendDiagnosticInterrupt(req, new ComputeInstancesSendDiagnosticInterruptSecurity() {{
                option1 = new ComputeInstancesSendDiagnosticInterruptSecurityOption1("cum", "sed") {{
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

            ComputeInstancesSetDeletionProtectionRequest req = new ComputeInstancesSetDeletionProtectionRequest("error", "ratione", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "perferendis";
                deletionProtection = false;
                fields = "vero";
                key = "excepturi";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "doloribus";
                uploadType = "corporis";
                uploadProtocol = "alias";
                userIp = "asperiores";
            }};            

            ComputeInstancesSetDeletionProtectionResponse res = sdk.instances.computeInstancesSetDeletionProtection(req, new ComputeInstancesSetDeletionProtectionSecurity() {{
                option1 = new ComputeInstancesSetDeletionProtectionSecurityOption1("quibusdam", "animi") {{
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

            ComputeInstancesSetDiskAutoDeleteRequest req = new ComputeInstancesSetDiskAutoDeleteRequest(false, "alias", "non", "porro", "voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "exercitationem";
                key = "exercitationem";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "magni";
                requestId = "unde";
                uploadType = "consequuntur";
                uploadProtocol = "cum";
                userIp = "aut";
            }};            

            ComputeInstancesSetDiskAutoDeleteResponse res = sdk.instances.computeInstancesSetDiskAutoDelete(req, new ComputeInstancesSetDiskAutoDeleteSecurity() {{
                option1 = new ComputeInstancesSetDiskAutoDeleteSecurityOption1("expedita", "quo") {{
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

            ComputeInstancesSetIamPolicyRequest req = new ComputeInstancesSetIamPolicyRequest("non", "libero", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "aliquam";
                            condition = new Expr() {{
                                description = "laboriosam";
                                expression = "nisi";
                                location = "labore";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("sunt"),
                                add("repellendus"),
                                add("voluptatem"),
                            }};
                            role = "non";
                        }}),
                        add(new Binding() {{
                            bindingId = "ipsum";
                            condition = new Expr() {{
                                description = "laudantium";
                                expression = "totam";
                                location = "facilis";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("architecto"),
                                add("libero"),
                                add("rerum"),
                                add("architecto"),
                            }};
                            role = "in";
                        }}),
                    }};
                    etag = "fuga";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                            add("incidunt"),
                                            add("soluta"),
                                            add("voluptas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quidem"),
                                            add("occaecati"),
                                            add("labore"),
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nihil"),
                                            add("recusandae"),
                                            add("illum"),
                                            add("laborum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("autem"),
                                }};
                                service = "tenetur";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("nisi"),
                                            add("hic"),
                                            add("assumenda"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quia"),
                                            add("quidem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("aperiam"),
                                }};
                                service = "sed";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                            add("ipsum"),
                                            add("accusamus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sequi"),
                                    add("et"),
                                }};
                                service = "aliquid";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("corporis"),
                                            add("nemo"),
                                            add("soluta"),
                                            add("magnam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("porro"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vitae"),
                                            add("quisquam"),
                                            add("fugit"),
                                            add("consequatur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("labore"),
                                    add("culpa"),
                                    add("illum"),
                                    add("quod"),
                                }};
                                service = "minus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "occaecati";
                                condition = new Expr() {{
                                    description = "voluptatem";
                                    expression = "labore";
                                    location = "maxime";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("provident"),
                                }};
                                role = "exercitationem";
                            }}),
                            add(new Binding() {{
                                bindingId = "cum";
                                condition = new Expr() {{
                                    description = "atque";
                                    expression = "suscipit";
                                    location = "labore";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("officiis"),
                                    add("voluptatibus"),
                                    add("mollitia"),
                                    add("quam"),
                                }};
                                role = "deleniti";
                            }}),
                            add(new Binding() {{
                                bindingId = "a";
                                condition = new Expr() {{
                                    description = "ab";
                                    expression = "voluptates";
                                    location = "eos";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("libero"),
                                }};
                                role = "error";
                            }}),
                        }};
                        etag = "perferendis";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "explicabo";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("quidem"),
                                            add("tempora"),
                                            add("minus"),
                                        }};
                                    }}),
                                }};
                                description = "harum";
                                ins = new String[]{{
                                    add("inventore"),
                                    add("iste"),
                                    add("voluptatibus"),
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
                                                    name = "Ronnie Nienow III";
                                                    value = "molestias";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ryan Dooley";
                                                    value = "quia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Mildred Upton";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rogelio Friesen Jr.";
                                                    value = "deleniti";
                                                }}),
                                            }};
                                            field = "quisquam";
                                            metric = "fugit";
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
                                                    name = "Wm Skiles MD";
                                                    value = "beatae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jamie MacGyver";
                                                    value = "eos";
                                                }}),
                                            }};
                                            field = "cupiditate";
                                            metric = "est";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quaerat"),
                                    add("itaque"),
                                    add("itaque"),
                                    add("animi"),
                                }};
                                permissions = new String[]{{
                                    add("ullam"),
                                    add("nisi"),
                                    add("nemo"),
                                }};
                            }}),
                        }};
                        version = 541642;
                    }};;
                }};;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "modi";
                key = "delectus";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "laudantium";
                uploadProtocol = "quas";
                userIp = "quidem";
            }};            

            ComputeInstancesSetIamPolicyResponse res = sdk.instances.computeInstancesSetIamPolicy(req, new ComputeInstancesSetIamPolicySecurity() {{
                option1 = new ComputeInstancesSetIamPolicySecurityOption1("voluptates", "labore") {{
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

            ComputeInstancesSetLabelsRequest req = new ComputeInstancesSetLabelsRequest("hic", "aspernatur", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetLabelsRequest = new InstancesSetLabelsRequest() {{
                    labelFingerprint = "tenetur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("unde", "autem");
                        put("ea", "molestiae");
                        put("accusamus", "labore");
                        put("autem", "placeat");
                    }};
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "possimus";
                fields = "dolores";
                key = "voluptatibus";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "fuga";
                uploadType = "ad";
                uploadProtocol = "corrupti";
                userIp = "temporibus";
            }};            

            ComputeInstancesSetLabelsResponse res = sdk.instances.computeInstancesSetLabels(req, new ComputeInstancesSetLabelsSecurity() {{
                option1 = new ComputeInstancesSetLabelsSecurityOption1("minus", "voluptates") {{
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

            ComputeInstancesSetMachineResourcesRequest req = new ComputeInstancesSetMachineResourcesRequest("repellat", "sed", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetMachineResourcesRequest = new InstancesSetMachineResourcesRequest() {{
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 617085;
                            acceleratorType = "nostrum";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 332597;
                            acceleratorType = "tempore";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 618063;
                            acceleratorType = "facilis";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 827220;
                            acceleratorType = "repellat";
                        }}),
                    }};
                }};;
                accessToken = "odit";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "alias";
                key = "id";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "vero";
                requestId = "excepturi";
                uploadType = "expedita";
                uploadProtocol = "harum";
                userIp = "quisquam";
            }};            

            ComputeInstancesSetMachineResourcesResponse res = sdk.instances.computeInstancesSetMachineResources(req, new ComputeInstancesSetMachineResourcesSecurity() {{
                option1 = new ComputeInstancesSetMachineResourcesSecurityOption1("eligendi", "magni") {{
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

            ComputeInstancesSetMachineTypeRequest req = new ComputeInstancesSetMachineTypeRequest("dignissimos", "aspernatur", "ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMachineTypeRequest = new InstancesSetMachineTypeRequest() {{
                    machineType = "impedit";
                }};;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "error";
                key = "quisquam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "quia";
                uploadType = "totam";
                uploadProtocol = "consequatur";
                userIp = "corrupti";
            }};            

            ComputeInstancesSetMachineTypeResponse res = sdk.instances.computeInstancesSetMachineType(req, new ComputeInstancesSetMachineTypeSecurity() {{
                option1 = new ComputeInstancesSetMachineTypeSecurityOption1("numquam", "alias") {{
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

            ComputeInstancesSetMetadataRequest req = new ComputeInstancesSetMetadataRequest("quod", "nisi", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                metadata = new Metadata() {{
                    fingerprint = "tenetur";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "corrupti";
                            value = "voluptates";
                        }}),
                        add(new MetadataItems() {{
                            key = "modi";
                            value = "enim";
                        }}),
                    }};
                    kind = "cumque";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "possimus";
                key = "maiores";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "optio";
                requestId = "voluptate";
                uploadType = "nostrum";
                uploadProtocol = "incidunt";
                userIp = "enim";
            }};            

            ComputeInstancesSetMetadataResponse res = sdk.instances.computeInstancesSetMetadata(req, new ComputeInstancesSetMetadataSecurity() {{
                option1 = new ComputeInstancesSetMetadataSecurityOption1("ipsa", "ipsa") {{
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

            ComputeInstancesSetMinCpuPlatformRequest req = new ComputeInstancesSetMinCpuPlatformRequest("quaerat", "nesciunt", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMinCpuPlatformRequest = new InstancesSetMinCpuPlatformRequest() {{
                    minCpuPlatform = "eum";
                }};;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "facilis";
                key = "magnam";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "provident";
                requestId = "inventore";
                uploadType = "sapiente";
                uploadProtocol = "temporibus";
                userIp = "sapiente";
            }};            

            ComputeInstancesSetMinCpuPlatformResponse res = sdk.instances.computeInstancesSetMinCpuPlatform(req, new ComputeInstancesSetMinCpuPlatformSecurity() {{
                option1 = new ComputeInstancesSetMinCpuPlatformSecurityOption1("ipsa", "vitae") {{
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

            ComputeInstancesSetNameRequest req = new ComputeInstancesSetNameRequest("nobis", "adipisci", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetNameRequest = new InstancesSetNameRequest() {{
                    currentName = "beatae";
                    name = "Willard Wunsch";
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "at";
                key = "incidunt";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "est";
                uploadType = "iusto";
                uploadProtocol = "dignissimos";
                userIp = "debitis";
            }};            

            ComputeInstancesSetNameResponse res = sdk.instances.computeInstancesSetName(req, new ComputeInstancesSetNameSecurity() {{
                option1 = new ComputeInstancesSetNameSecurityOption1("quo", "saepe") {{
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
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
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

            ComputeInstancesSetSchedulingRequest req = new ComputeInstancesSetSchedulingRequest("tempore", "sunt", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                scheduling = new Scheduling() {{
                    automaticRestart = false;
                    instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                    locationHint = "accusantium";
                    minNodeCpus = 951768;
                    nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                        add(new SchedulingNodeAffinity() {{
                            key = "repudiandae";
                            operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                            values = new String[]{{
                                add("laboriosam"),
                            }};
                        }}),
                    }};
                    onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                    preemptible = false;
                    provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                }};;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "aperiam";
                key = "delectus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "repellat";
                requestId = "molestias";
                uploadType = "ducimus";
                uploadProtocol = "dolorem";
                userIp = "sapiente";
            }};            

            ComputeInstancesSetSchedulingResponse res = sdk.instances.computeInstancesSetScheduling(req, new ComputeInstancesSetSchedulingSecurity() {{
                option1 = new ComputeInstancesSetSchedulingSecurityOption1("error", "facere") {{
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

            ComputeInstancesSetServiceAccountRequest req = new ComputeInstancesSetServiceAccountRequest("veniam", "eligendi", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetServiceAccountRequest = new InstancesSetServiceAccountRequest() {{
                    email = "Rowan.Friesen73@hotmail.com";
                    scopes = new String[]{{
                        add("deserunt"),
                        add("non"),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "quia";
                fields = "ullam";
                key = "dolor";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "ipsa";
                uploadType = "consequuntur";
                uploadProtocol = "ullam";
                userIp = "molestiae";
            }};            

            ComputeInstancesSetServiceAccountResponse res = sdk.instances.computeInstancesSetServiceAccount(req, new ComputeInstancesSetServiceAccountSecurity() {{
                option1 = new ComputeInstancesSetServiceAccountSecurityOption1("architecto", "ab") {{
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

            ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest req = new ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest("maiores", "labore", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                    updateAutoLearnPolicy = false;
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "pariatur";
                key = "porro";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "voluptatum";
                uploadType = "cum";
                uploadProtocol = "itaque";
                userIp = "sit";
            }};            

            ComputeInstancesSetShieldedInstanceIntegrityPolicyResponse res = sdk.instances.computeInstancesSetShieldedInstanceIntegrityPolicy(req, new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity() {{
                option1 = new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1("excepturi", "recusandae") {{
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

            ComputeInstancesSetTagsRequest req = new ComputeInstancesSetTagsRequest("numquam", "architecto", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                tags = new Tags() {{
                    fingerprint = "culpa";
                    items = new String[]{{
                        add("inventore"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "et";
                key = "odit";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "harum";
                uploadType = "dolorum";
                uploadProtocol = "provident";
                userIp = "quibusdam";
            }};            

            ComputeInstancesSetTagsResponse res = sdk.instances.computeInstancesSetTags(req, new ComputeInstancesSetTagsSecurity() {{
                option1 = new ComputeInstancesSetTagsSecurityOption1("ipsam", "provident") {{
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

            ComputeInstancesSimulateMaintenanceEventRequest req = new ComputeInstancesSimulateMaintenanceEventRequest("omnis", "rem", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "placeat";
                fields = "sapiente";
                key = "assumenda";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "eligendi";
                requestId = "odio";
                uploadType = "iusto";
                uploadProtocol = "eligendi";
                userIp = "ullam";
            }};            

            ComputeInstancesSimulateMaintenanceEventResponse res = sdk.instances.computeInstancesSimulateMaintenanceEvent(req, new ComputeInstancesSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeInstancesSimulateMaintenanceEventSecurityOption1("dolorem", "vero") {{
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

            ComputeInstancesStartRequest req = new ComputeInstancesStartRequest("esse", "vero", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "excepturi";
                uploadType = "consequatur";
                uploadProtocol = "distinctio";
                userIp = "similique";
            }};            

            ComputeInstancesStartResponse res = sdk.instances.computeInstancesStart(req, new ComputeInstancesStartSecurity() {{
                option1 = new ComputeInstancesStartSecurityOption1("porro", "consectetur") {{
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

            ComputeInstancesStartWithEncryptionKeyRequest req = new ComputeInstancesStartWithEncryptionKeyRequest("molestias", "modi", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesStartWithEncryptionKeyRequest = new InstancesStartWithEncryptionKeyRequest() {{
                    disks = new org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk[]{{
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "sint";
                                kmsKeyServiceAccount = "ea";
                                rawKey = "in";
                                rsaEncryptedKey = "ipsa";
                                sha256 = "sequi";
                            }};
                            source = "maiores";
                        }}),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "sunt";
                key = "quo";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "sit";
                requestId = "deleniti";
                uploadType = "qui";
                uploadProtocol = "dolore";
                userIp = "possimus";
            }};            

            ComputeInstancesStartWithEncryptionKeyResponse res = sdk.instances.computeInstancesStartWithEncryptionKey(req, new ComputeInstancesStartWithEncryptionKeySecurity() {{
                option1 = new ComputeInstancesStartWithEncryptionKeySecurityOption1("dicta", "deleniti") {{
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

            ComputeInstancesStopRequest req = new ComputeInstancesStopRequest("perspiciatis", "deserunt", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "harum";
                discardLocalSsd = false;
                fields = "sunt";
                key = "facere";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "repudiandae";
                uploadType = "rerum";
                uploadProtocol = "esse";
                userIp = "accusantium";
            }};            

            ComputeInstancesStopResponse res = sdk.instances.computeInstancesStop(req, new ComputeInstancesStopSecurity() {{
                option1 = new ComputeInstancesStopSecurityOption1("nihil", "similique") {{
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

            ComputeInstancesSuspendRequest req = new ComputeInstancesSuspendRequest("est", "iure", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.PROTO;
                callback = "officiis";
                discardLocalSsd = false;
                fields = "dolore";
                key = "commodi";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "beatae";
                uploadType = "voluptate";
                uploadProtocol = "voluptate";
                userIp = "fugiat";
            }};            

            ComputeInstancesSuspendResponse res = sdk.instances.computeInstancesSuspend(req, new ComputeInstancesSuspendSecurity() {{
                option1 = new ComputeInstancesSuspendSecurityOption1("quidem", "iste") {{
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

            ComputeInstancesTestIamPermissionsRequest req = new ComputeInstancesTestIamPermissionsRequest("pariatur", "nobis", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eaque"),
                        add("voluptatibus"),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "nisi";
                key = "occaecati";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "repudiandae";
                uploadProtocol = "repudiandae";
                userIp = "odio";
            }};            

            ComputeInstancesTestIamPermissionsResponse res = sdk.instances.computeInstancesTestIamPermissions(req, new ComputeInstancesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstancesTestIamPermissionsSecurityOption1("nihil", "ipsa") {{
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
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.InstanceKeyRevocationActionTypeEnum;
import org.openapis.openapi.models.shared.InstanceParams;
import org.openapis.openapi.models.shared.InstancePrivateIpv6GoogleAccessEnum;
import org.openapis.openapi.models.shared.InstanceStatusEnum;
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
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateRequest req = new ComputeInstancesUpdateRequest("eveniet", "neque", "autem") {{
                dollarXgafv = XgafvEnum.ONE;
                instance1 = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        threadsPerCore = 577305;
                        visibleCoreCount = 480226;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "debitis";
                    creationTimestamp = "voluptatibus";
                    deletionProtection = false;
                    description = "esse";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            autoDelete = false;
                            boot = false;
                            deviceName = "doloremque";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "vel";
                                kmsKeyServiceAccount = "itaque";
                                rawKey = "suscipit";
                                rsaEncryptedKey = "vitae";
                                sha256 = "tempore";
                            }};
                            diskSizeGb = "sit";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                }}),
                            }};
                            index = 77760;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "porro";
                                diskName = "consequuntur";
                                diskSizeGb = "perferendis";
                                diskType = "est";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("temporibus", "perspiciatis");
                                }};
                                licenses = new String[]{{
                                    add("ea"),
                                    add("sequi"),
                                    add("esse"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "est";
                                provisionedThroughput = "totam";
                                replicaZones = new String[]{{
                                    add("maxime"),
                                    add("adipisci"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "autem");
                                    put("nostrum", "ad");
                                    put("molestiae", "ut");
                                    put("possimus", "harum");
                                }};
                                resourcePolicies = new String[]{{
                                    add("reiciendis"),
                                    add("natus"),
                                    add("labore"),
                                }};
                                sourceImage = "officia";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quam";
                                    kmsKeyServiceAccount = "placeat";
                                    rawKey = "sint";
                                    rsaEncryptedKey = "rem";
                                    sha256 = "a";
                                }};
                                sourceSnapshot = "illo";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "velit";
                                    kmsKeyServiceAccount = "est";
                                    rawKey = "delectus";
                                    rsaEncryptedKey = "magni";
                                    sha256 = "rem";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "libero";
                            licenses = new String[]{{
                                add("porro"),
                            }};
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "expedita";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "voluptatibus";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "pariatur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "amet";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ea";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "esse";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "sunt";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "tempore";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "beatae";
                            type = AttachedDiskTypeEnum.SCRATCH;
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "occaecati";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "voluptatum";
                                kmsKeyServiceAccount = "beatae";
                                rawKey = "natus";
                                rsaEncryptedKey = "aliquid";
                                sha256 = "assumenda";
                            }};
                            diskSizeGb = "veniam";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.WINDOWS;
                                }}),
                            }};
                            index = 420405;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "mollitia";
                                diskName = "sunt";
                                diskSizeGb = "quod";
                                diskType = "labore";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ducimus", "natus");
                                    put("fuga", "saepe");
                                    put("nesciunt", "non");
                                }};
                                licenses = new String[]{{
                                    add("praesentium"),
                                    add("beatae"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "eos";
                                provisionedThroughput = "dolor";
                                replicaZones = new String[]{{
                                    add("dolorem"),
                                    add("omnis"),
                                    add("fuga"),
                                    add("voluptate"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("consequatur", "officiis");
                                    put("ab", "in");
                                    put("optio", "distinctio");
                                    put("quasi", "dolores");
                                }};
                                resourcePolicies = new String[]{{
                                    add("enim"),
                                    add("nam"),
                                    add("culpa"),
                                    add("laudantium"),
                                }};
                                sourceImage = "fugit";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "corporis";
                                    kmsKeyServiceAccount = "a";
                                    rawKey = "necessitatibus";
                                    rsaEncryptedKey = "explicabo";
                                    sha256 = "eos";
                                }};
                                sourceSnapshot = "quo";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "fugiat";
                                    kmsKeyServiceAccount = "enim";
                                    rawKey = "optio";
                                    rsaEncryptedKey = "tempore";
                                    sha256 = "est";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "hic";
                            licenses = new String[]{{
                                add("repellat"),
                                add("necessitatibus"),
                                add("quisquam"),
                            }};
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "consequuntur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "aliquid";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "sunt";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "illum";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "veniam";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "earum";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "saepe";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "odit";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "at";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "provident";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "ea";
                            type = AttachedDiskTypeEnum.SCRATCH;
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARM64;
                            autoDelete = false;
                            boot = false;
                            deviceName = "delectus";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "minus";
                                kmsKeyServiceAccount = "nihil";
                                rawKey = "quibusdam";
                                rsaEncryptedKey = "assumenda";
                                sha256 = "animi";
                            }};
                            diskSizeGb = "molestiae";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.WINDOWS;
                                }}),
                            }};
                            index = 808464;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "sit";
                                diskName = "vero";
                                diskSizeGb = "laboriosam";
                                diskType = "aut";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("nostrum", "praesentium");
                                    put("natus", "numquam");
                                }};
                                licenses = new String[]{{
                                    add("autem"),
                                    add("et"),
                                    add("quisquam"),
                                    add("illo"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "quisquam";
                                provisionedThroughput = "facere";
                                replicaZones = new String[]{{
                                    add("aut"),
                                    add("aspernatur"),
                                    add("odit"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("recusandae", "neque");
                                    put("nihil", "nobis");
                                }};
                                resourcePolicies = new String[]{{
                                    add("facere"),
                                }};
                                sourceImage = "iste";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "reprehenderit";
                                    kmsKeyServiceAccount = "voluptate";
                                    rawKey = "reiciendis";
                                    rsaEncryptedKey = "et";
                                    sha256 = "culpa";
                                }};
                                sourceSnapshot = "exercitationem";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "eius";
                                    kmsKeyServiceAccount = "iste";
                                    rawKey = "quae";
                                    rsaEncryptedKey = "similique";
                                    sha256 = "quidem";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "provident";
                            licenses = new String[]{{
                                add("nostrum"),
                                add("beatae"),
                            }};
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "doloremque";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "qui";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "repudiandae";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "dolorem";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "voluptas";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "sunt";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "similique";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "officiis";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "cupiditate";
                                    fileType = FileContentBufferFileTypeEnum.X509;
                                }};
                            }};
                            source = "nobis";
                            type = AttachedDiskTypeEnum.SCRATCH;
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "unde";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "voluptates";
                                kmsKeyServiceAccount = "in";
                                rawKey = "odit";
                                rsaEncryptedKey = "iste";
                                sha256 = "eligendi";
                            }};
                            diskSizeGb = "error";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
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
                            index = 519008;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                description = "aliquam";
                                diskName = "tempora";
                                diskSizeGb = "laboriosam";
                                diskType = "quaerat";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quisquam", "fuga");
                                }};
                                licenses = new String[]{{
                                    add("ipsa"),
                                    add("illum"),
                                }};
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "nihil";
                                provisionedThroughput = "neque";
                                replicaZones = new String[]{{
                                    add("consequuntur"),
                                    add("a"),
                                    add("unde"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("maiores", "labore");
                                }};
                                resourcePolicies = new String[]{{
                                    add("in"),
                                    add("at"),
                                }};
                                sourceImage = "quisquam";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quae";
                                    kmsKeyServiceAccount = "possimus";
                                    rawKey = "praesentium";
                                    rsaEncryptedKey = "facere";
                                    sha256 = "fuga";
                                }};
                                sourceSnapshot = "minima";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "voluptas";
                                    kmsKeyServiceAccount = "et";
                                    rawKey = "explicabo";
                                    rsaEncryptedKey = "sed";
                                    sha256 = "aut";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "laboriosam";
                            licenses = new String[]{{
                                add("soluta"),
                                add("quas"),
                                add("asperiores"),
                            }};
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "voluptate";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "praesentium";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "et";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "in";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "similique";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "error";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "nulla";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "reprehenderit";
                                    fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                }};
                            }};
                            source = "aut";
                            type = AttachedDiskTypeEnum.SCRATCH;
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    fingerprint = "unde";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 802426;
                            acceleratorType = "numquam";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 283848;
                            acceleratorType = "fugiat";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 706345;
                            acceleratorType = "dolores";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 463461;
                            acceleratorType = "eius";
                        }}),
                    }};
                    hostname = "grizzled-cook.com";
                    id = "officiis";
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.NONE;
                    kind = "minus";
                    labelFingerprint = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minus", "voluptas");
                        put("quibusdam", "aut");
                    }};
                    lastStartTimestamp = "quod";
                    lastStopTimestamp = "rerum";
                    lastSuspendedTimestamp = "cumque";
                    machineType = "delectus";
                    metadata = new Metadata() {{
                        fingerprint = "repellendus";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "possimus";
                                value = "consectetur";
                            }}),
                            add(new MetadataItems() {{
                                key = "dolor";
                                value = "modi";
                            }}),
                            add(new MetadataItems() {{
                                key = "facilis";
                                value = "autem";
                            }}),
                            add(new MetadataItems() {{
                                key = "repellat";
                                value = "ea";
                            }}),
                        }};
                        kind = "fugit";
                    }};;
                    minCpuPlatform = "consectetur";
                    name = "Sylvester Walker";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "alias";
                                    externalIpv6PrefixLength = 672115;
                                    kind = "voluptates";
                                    name = "Dr. Alvin Weber";
                                    natIP = "quas";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "sint";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "sapiente";
                                    externalIpv6PrefixLength = 390916;
                                    kind = "id";
                                    name = "Christopher Hermiston";
                                    natIP = "nisi";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "odio";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quasi";
                                    subnetworkRangeName = "ipsum";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quo";
                                    subnetworkRangeName = "expedita";
                                }}),
                            }};
                            fingerprint = "saepe";
                            internalIpv6PrefixLength = 169169;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "et";
                                    externalIpv6PrefixLength = 476765;
                                    kind = "ea";
                                    name = "Clark Blanda";
                                    natIP = "adipisci";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "modi";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "doloribus";
                                    externalIpv6PrefixLength = 398054;
                                    kind = "illo";
                                    name = "Mr. Dennis Kilback";
                                    natIP = "esse";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "tempore";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "enim";
                                    externalIpv6PrefixLength = 932415;
                                    kind = "saepe";
                                    name = "Darla Koelpin Sr.";
                                    natIP = "quas";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicPtrDomainName = "consequatur";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "esse";
                                    externalIpv6PrefixLength = 157014;
                                    kind = "maiores";
                                    name = "Kathy Watsica";
                                    natIP = "incidunt";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "pariatur";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                            ipv6Address = "alias";
                            kind = "tenetur";
                            name = "Ethel Pouros";
                            network = "suscipit";
                            networkAttachment = "fugiat";
                            networkIP = "perspiciatis";
                            nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            queueCount = 295958;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "assumenda";
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "saepe";
                                    externalIpv6PrefixLength = 816556;
                                    kind = "necessitatibus";
                                    name = "Ray Klein";
                                    natIP = "deleniti";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "reiciendis";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "iure";
                                    externalIpv6PrefixLength = 673057;
                                    kind = "ab";
                                    name = "Sandy Labadie";
                                    natIP = "nemo";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "totam";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "illum";
                                    subnetworkRangeName = "consequuntur";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "praesentium";
                                    subnetworkRangeName = "fugiat";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "beatae";
                                    subnetworkRangeName = "perferendis";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quaerat";
                                    subnetworkRangeName = "aperiam";
                                }}),
                            }};
                            fingerprint = "harum";
                            internalIpv6PrefixLength = 479464;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "sint";
                                    externalIpv6PrefixLength = 108349;
                                    kind = "ratione";
                                    name = "Clarence Pagac";
                                    natIP = "quaerat";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "expedita";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "totam";
                                    externalIpv6PrefixLength = 239677;
                                    kind = "nemo";
                                    name = "Sarah Kuvalis";
                                    natIP = "suscipit";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "quisquam";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "quis";
                                    externalIpv6PrefixLength = 198665;
                                    kind = "necessitatibus";
                                    name = "Gregory Goldner";
                                    natIP = "rem";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "iste";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "deserunt";
                                    externalIpv6PrefixLength = 295726;
                                    kind = "nisi";
                                    name = "Marguerite Stiedemann";
                                    natIP = "temporibus";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "non";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "porro";
                            kind = "adipisci";
                            name = "Muriel Murray";
                            network = "sunt";
                            networkAttachment = "deleniti";
                            networkIP = "consequuntur";
                            nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                            queueCount = 265148;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "fugiat";
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "aliquid";
                                    externalIpv6PrefixLength = 142824;
                                    kind = "quis";
                                    name = "Norman Romaguera";
                                    natIP = "reiciendis";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "inventore";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "blanditiis";
                                    externalIpv6PrefixLength = 917168;
                                    kind = "saepe";
                                    name = "Edwin Hagenes";
                                    natIP = "dignissimos";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "odit";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "maxime";
                                    externalIpv6PrefixLength = 824162;
                                    kind = "non";
                                    name = "Melissa Turcotte";
                                    natIP = "corrupti";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "itaque";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "itaque";
                                    subnetworkRangeName = "accusantium";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "labore";
                                    subnetworkRangeName = "voluptatum";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "nisi";
                                    subnetworkRangeName = "pariatur";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "necessitatibus";
                                    subnetworkRangeName = "perferendis";
                                }}),
                            }};
                            fingerprint = "repellendus";
                            internalIpv6PrefixLength = 373465;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "repellendus";
                                    externalIpv6PrefixLength = 467338;
                                    kind = "non";
                                    name = "Richard Beier";
                                    natIP = "accusantium";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "voluptates";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "fugiat";
                                    externalIpv6PrefixLength = 772103;
                                    kind = "autem";
                                    name = "Rosemary Yost";
                                    natIP = "dignissimos";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "iure";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "odio";
                            kind = "enim";
                            name = "Gordon Pollich DVM";
                            network = "consectetur";
                            networkAttachment = "vero";
                            networkIP = "eius";
                            nicType = NetworkInterfaceNicTypeEnum.VIRTIO_NET;
                            queueCount = 958907;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "impedit";
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("cupiditate", "ab");
                            put("necessitatibus", "maxime");
                            put("veniam", "qui");
                        }};
                    }};;
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                        key = "modi";
                        values = new String[]{{
                            add("aperiam"),
                            add("alias"),
                            add("aut"),
                            add("quae"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("repudiandae"),
                        add("hic"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "non";
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                        locationHint = "impedit";
                        minNodeCpus = 888573;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "dicta";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("minus"),
                                    add("minima"),
                                    add("neque"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "debitis";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("suscipit"),
                                    add("nostrum"),
                                    add("corrupti"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "odio";
                                operator = SchedulingNodeAffinityOperatorEnum.OPERATOR_UNSPECIFIED;
                                values = new String[]{{
                                    add("eius"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                    }};;
                    selfLink = "quae";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Friedrich_Ritchie@hotmail.com";
                            scopes = new String[]{{
                                add("voluptates"),
                                add("debitis"),
                                add("non"),
                                add("quae"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Mabelle_Volkman@gmail.com";
                            scopes = new String[]{{
                                add("magni"),
                                add("minus"),
                                add("id"),
                            }};
                        }}),
                    }};
                    shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "earum";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "architecto";
                        kmsKeyServiceAccount = "nobis";
                        rawKey = "ipsa";
                        rsaEncryptedKey = "dolores";
                        sha256 = "nemo";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.TERMINATED;
                    statusMessage = "architecto";
                    tags = new Tags() {{
                        fingerprint = "pariatur";
                        items = new String[]{{
                            add("magnam"),
                        }};
                    }};;
                    zone = "dignissimos";
                }};;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "nisi";
                key = "voluptatibus";
                minimalAction = ComputeInstancesUpdateMinimalActionEnum.REFRESH;
                mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum.INVALID;
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "quibusdam";
                uploadType = "consequatur";
                uploadProtocol = "cumque";
                userIp = "accusantium";
            }};            

            ComputeInstancesUpdateResponse res = sdk.instances.computeInstancesUpdate(req, new ComputeInstancesUpdateSecurity() {{
                option1 = new ComputeInstancesUpdateSecurityOption1("commodi", "porro") {{
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

            ComputeInstancesUpdateAccessConfigRequest req = new ComputeInstancesUpdateAccessConfigRequest("veniam", "facere", "excepturi", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "in";
                    externalIpv6PrefixLength = 169937;
                    kind = "quo";
                    name = "Ismael Cartwright";
                    natIP = "porro";
                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                    publicPtrDomainName = "nesciunt";
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "maxime";
                key = "fuga";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "reiciendis";
                uploadType = "est";
                uploadProtocol = "dignissimos";
                userIp = "eaque";
            }};            

            ComputeInstancesUpdateAccessConfigResponse res = sdk.instances.computeInstancesUpdateAccessConfig(req, new ComputeInstancesUpdateAccessConfigSecurity() {{
                option1 = new ComputeInstancesUpdateAccessConfigSecurityOption1("quo", "labore") {{
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

            ComputeInstancesUpdateDisplayDeviceRequest req = new ComputeInstancesUpdateDisplayDeviceRequest("consectetur", "ipsum", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                displayDevice = new DisplayDevice() {{
                    enableDisplay = false;
                }};;
                accessToken = "quisquam";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "nulla";
                key = "beatae";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "deleniti";
                uploadType = "maiores";
                uploadProtocol = "odio";
                userIp = "tenetur";
            }};            

            ComputeInstancesUpdateDisplayDeviceResponse res = sdk.instances.computeInstancesUpdateDisplayDevice(req, new ComputeInstancesUpdateDisplayDeviceSecurity() {{
                option1 = new ComputeInstancesUpdateDisplayDeviceSecurityOption1("quam", "nemo") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateNetworkInterfaceRequest req = new ComputeInstancesUpdateNetworkInterfaceRequest("sapiente", "magnam", "hic", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                networkInterface1 = new NetworkInterface() {{
                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "quasi";
                            externalIpv6PrefixLength = 768846;
                            kind = "eaque";
                            name = "Dan Lebsack";
                            natIP = "non";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                            publicPtrDomainName = "repudiandae";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "temporibus";
                            externalIpv6PrefixLength = 441654;
                            kind = "soluta";
                            name = "Glenda Wisozk";
                            natIP = "tenetur";
                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                            publicPtrDomainName = "officiis";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "eius";
                            externalIpv6PrefixLength = 155534;
                            kind = "pariatur";
                            name = "Dr. Dustin Reilly";
                            natIP = "eveniet";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            publicPtrDomainName = "earum";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "voluptatibus";
                            externalIpv6PrefixLength = 480957;
                            kind = "quo";
                            name = "Hannah Bergnaum";
                            natIP = "itaque";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                            publicPtrDomainName = "odit";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                    }};
                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                        add(new AliasIpRange() {{
                            ipCidrRange = "consequuntur";
                            subnetworkRangeName = "voluptate";
                        }}),
                        add(new AliasIpRange() {{
                            ipCidrRange = "ipsam";
                            subnetworkRangeName = "debitis";
                        }}),
                        add(new AliasIpRange() {{
                            ipCidrRange = "repudiandae";
                            subnetworkRangeName = "officia";
                        }}),
                    }};
                    fingerprint = "esse";
                    internalIpv6PrefixLength = 385106;
                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "quasi";
                            externalIpv6PrefixLength = 471912;
                            kind = "labore";
                            name = "Irma Beier";
                            natIP = "tenetur";
                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                            publicPtrDomainName = "perspiciatis";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "facilis";
                            externalIpv6PrefixLength = 478138;
                            kind = "perspiciatis";
                            name = "Miss Tara Schneider DVM";
                            natIP = "mollitia";
                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                            publicPtrDomainName = "quidem";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "eos";
                            externalIpv6PrefixLength = 61375;
                            kind = "culpa";
                            name = "Jennifer Von";
                            natIP = "incidunt";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                            publicPtrDomainName = "accusamus";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                    }};
                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                    ipv6Address = "eaque";
                    kind = "nisi";
                    name = "Marilyn Kshlerin";
                    network = "nostrum";
                    networkAttachment = "esse";
                    networkIP = "nobis";
                    nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                    queueCount = 67981;
                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                    subnetwork = "ipsa";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "rem";
                key = "earum";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "iste";
                uploadType = "magni";
                uploadProtocol = "inventore";
                userIp = "eligendi";
            }};            

            ComputeInstancesUpdateNetworkInterfaceResponse res = sdk.instances.computeInstancesUpdateNetworkInterface(req, new ComputeInstancesUpdateNetworkInterfaceSecurity() {{
                option1 = new ComputeInstancesUpdateNetworkInterfaceSecurityOption1("dolores", "exercitationem") {{
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

            ComputeInstancesUpdateShieldedInstanceConfigRequest req = new ComputeInstancesUpdateShieldedInstanceConfigRequest("reprehenderit", "iste", "ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                    enableIntegrityMonitoring = false;
                    enableSecureBoot = false;
                    enableVtpm = false;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "sit";
                key = "natus";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "sequi";
                uploadType = "officiis";
                uploadProtocol = "reiciendis";
                userIp = "dolorum";
            }};            

            ComputeInstancesUpdateShieldedInstanceConfigResponse res = sdk.instances.computeInstancesUpdateShieldedInstanceConfig(req, new ComputeInstancesUpdateShieldedInstanceConfigSecurity() {{
                option1 = new ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1("aliquam", "laboriosam") {{
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
