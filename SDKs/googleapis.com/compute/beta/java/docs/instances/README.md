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

            ComputeInstancesAddAccessConfigRequest req = new ComputeInstancesAddAccessConfigRequest("ipsa", "ipsa", "quaerat", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "optio";
                    externalIpv6PrefixLength = 430027;
                    kind = "commodi";
                    name = "Rachel Prosacco";
                    natIP = "provident";
                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                    publicPtrDomainName = "sapiente";
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "nobis";
                key = "adipisci";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "beatae";
                uploadType = "eveniet";
                uploadProtocol = "quas";
                userIp = "maiores";
            }};            

            ComputeInstancesAddAccessConfigResponse res = sdk.instances.computeInstancesAddAccessConfig(req, new ComputeInstancesAddAccessConfigSecurity() {{
                option1 = new ComputeInstancesAddAccessConfigSecurityOption1("voluptate", "libero") {{
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

            ComputeInstancesAddResourcePoliciesRequest req = new ComputeInstancesAddResourcePoliciesRequest("quod", "ea", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesAddResourcePoliciesRequest = new InstancesAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("autem"),
                        add("alias"),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "debitis";
                key = "quo";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "tempore";
                requestId = "sunt";
                uploadType = "nisi";
                uploadProtocol = "nulla";
                userIp = "architecto";
            }};            

            ComputeInstancesAddResourcePoliciesResponse res = sdk.instances.computeInstancesAddResourcePolicies(req, new ComputeInstancesAddResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesAddResourcePoliciesSecurityOption1("accusantium", "a") {{
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

            ComputeInstancesAggregatedListRequest req = new ComputeInstancesAggregatedListRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "neque";
                filter = "ab";
                includeAllScopes = false;
                key = "quisquam";
                maxResults = 470455L;
                oauthToken = "quisquam";
                orderBy = "aperiam";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "aut";
                returnPartialSuccess = false;
                uploadType = "repellat";
                uploadProtocol = "molestias";
                userIp = "ducimus";
            }};            

            ComputeInstancesAggregatedListResponse res = sdk.instances.computeInstancesAggregatedList(req, new ComputeInstancesAggregatedListSecurity() {{
                option1 = new ComputeInstancesAggregatedListSecurityOption1("dolorem", "sapiente") {{
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

            ComputeInstancesAttachDiskRequest req = new ComputeInstancesAttachDiskRequest("error", "facere", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                attachedDisk = new AttachedDisk() {{
                    architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                    autoDelete = false;
                    boot = false;
                    deviceName = "nemo";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "doloribus";
                        kmsKeyServiceAccount = "illum";
                        rawKey = "non";
                        rsaEncryptedKey = "repudiandae";
                        sha256 = "quae";
                    }};;
                    diskSizeGb = "tempore";
                    forceAttach = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                    }};
                    index = 640400;
                    initializeParams = new AttachedDiskInitializeParams() {{
                        architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                        description = "quia";
                        diskName = "ullam";
                        diskSizeGb = "dolor";
                        diskType = "maxime";
                        guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                            add(new GuestOsFeature() {{
                                type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                            }}),
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("ullam", "molestiae");
                        }};
                        licenses = new String[]{{
                            add("ab"),
                        }};
                        multiWriter = false;
                        onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                        provisionedIops = "labore";
                        provisionedThroughput = "fugit";
                        replicaZones = new String[]{{
                            add("iusto"),
                            add("recusandae"),
                            add("iusto"),
                            add("pariatur"),
                        }};
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("enim", "tempora");
                            put("voluptatum", "cum");
                            put("itaque", "sit");
                            put("excepturi", "recusandae");
                        }};
                        resourcePolicies = new String[]{{
                            add("architecto"),
                            add("fuga"),
                        }};
                        sourceImage = "iusto";
                        sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "culpa";
                            kmsKeyServiceAccount = "dolores";
                            rawKey = "inventore";
                            rsaEncryptedKey = "ipsam";
                            sha256 = "impedit";
                        }};;
                        sourceSnapshot = "officia";
                        sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                            kmsKeyName = "et";
                            kmsKeyServiceAccount = "odit";
                            rawKey = "similique";
                            rsaEncryptedKey = "labore";
                            sha256 = "harum";
                        }};;
                    }};;
                    interface_ = AttachedDiskInterfaceEnum.SCSI;
                    kind = "provident";
                    licenses = new String[]{{
                        add("ipsam"),
                        add("provident"),
                        add("omnis"),
                        add("rem"),
                    }};
                    locked = false;
                    mode = AttachedDiskModeEnum.READ_WRITE;
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "perspiciatis";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "sapiente";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "alias";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "odio";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "eligendi";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "vero";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "vero";
                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                        }};;
                    }};;
                    source = "facere";
                    type = AttachedDiskTypeEnum.PERSISTENT;
                    userLicenses = new String[]{{
                        add("vero"),
                        add("nisi"),
                        add("recusandae"),
                        add("deleniti"),
                    }};
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "consequatur";
                fields = "distinctio";
                forceAttach = false;
                key = "similique";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "molestias";
                uploadType = "modi";
                uploadProtocol = "saepe";
                userIp = "qui";
            }};            

            ComputeInstancesAttachDiskResponse res = sdk.instances.computeInstancesAttachDisk(req, new ComputeInstancesAttachDiskSecurity() {{
                option1 = new ComputeInstancesAttachDiskSecurityOption1("dolor", "sint") {{
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
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesBulkInsertRequest req = new ComputeInstancesBulkInsertRequest("ea", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkInsertInstanceResource = new BulkInsertInstanceResource() {{
                    count = "sequi";
                    instanceProperties = new InstanceProperties() {{
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            enableNestedVirtualization = false;
                            enableUefiNetworking = false;
                            threadsPerCore = 981909;
                            visibleCoreCount = 932641;
                        }};;
                        canIpForward = false;
                        confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                            enableConfidentialCompute = false;
                        }};;
                        description = "quod";
                        disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                            add(new AttachedDisk() {{
                                architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                autoDelete = false;
                                boot = false;
                                deviceName = "quo";
                                diskEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "veniam";
                                    kmsKeyServiceAccount = "sit";
                                    rawKey = "deleniti";
                                    rsaEncryptedKey = "qui";
                                    sha256 = "dolore";
                                }};
                                diskSizeGb = "possimus";
                                forceAttach = false;
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                }};
                                index = 598720;
                                initializeParams = new AttachedDiskInitializeParams() {{
                                    architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                    description = "dolor";
                                    diskName = "eum";
                                    diskSizeGb = "culpa";
                                    diskType = "iure";
                                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                        }}),
                                        add(new GuestOsFeature() {{
                                            type = GuestOsFeatureTypeEnum.GVNIC;
                                        }}),
                                    }};
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("repudiandae", "rerum");
                                        put("esse", "accusantium");
                                    }};
                                    licenses = new String[]{{
                                        add("similique"),
                                        add("est"),
                                    }};
                                    multiWriter = false;
                                    onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                    provisionedIops = "aut";
                                    provisionedThroughput = "placeat";
                                    replicaZones = new String[]{{
                                        add("doloribus"),
                                        add("officiis"),
                                        add("dolore"),
                                    }};
                                    resourceManagerTags = new java.util.HashMap<String, String>() {{
                                        put("debitis", "commodi");
                                        put("beatae", "voluptate");
                                    }};
                                    resourcePolicies = new String[]{{
                                        add("fugiat"),
                                        add("quidem"),
                                    }};
                                    sourceImage = "iste";
                                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "pariatur";
                                        kmsKeyServiceAccount = "nobis";
                                        rawKey = "dolor";
                                        rsaEncryptedKey = "distinctio";
                                        sha256 = "dignissimos";
                                    }};
                                    sourceSnapshot = "eaque";
                                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                        kmsKeyName = "voluptatibus";
                                        kmsKeyServiceAccount = "voluptatibus";
                                        rawKey = "cum";
                                        rsaEncryptedKey = "facilis";
                                        sha256 = "nisi";
                                    }};
                                }};
                                interface_ = AttachedDiskInterfaceEnum.SCSI;
                                kind = "ducimus";
                                licenses = new String[]{{
                                    add("repudiandae"),
                                }};
                                locked = false;
                                mode = AttachedDiskModeEnum.READ_WRITE;
                                shieldedInstanceInitialState = new InitialStateConfig() {{
                                    dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "nihil";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eveniet";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "alias";
                                            fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "iusto";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                    }};
                                    keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                        add(new FileContentBuffer() {{
                                            content = "esse";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "eos";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "vel";
                                            fileType = FileContentBufferFileTypeEnum.X509;
                                        }}),
                                        add(new FileContentBuffer() {{
                                            content = "suscipit";
                                            fileType = FileContentBufferFileTypeEnum.BIN;
                                        }}),
                                    }};
                                    pk = new FileContentBuffer() {{
                                        content = "tempore";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }};
                                }};
                                source = "quibusdam";
                                type = AttachedDiskTypeEnum.PERSISTENT;
                                userLicenses = new String[]{{
                                    add("blanditiis"),
                                }};
                            }}),
                        }};
                        displayDevice = new DisplayDevice() {{
                            enableDisplay = false;
                        }};;
                        guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 77760;
                                acceleratorType = "modi";
                            }}),
                            add(new AcceleratorConfig() {{
                                acceleratorCount = 781356;
                                acceleratorType = "consequuntur";
                            }}),
                        }};
                        keyRevocationActionType = InstancePropertiesKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                        labels = new java.util.HashMap<String, String>() {{
                            put("ipsum", "temporibus");
                            put("perspiciatis", "corrupti");
                            put("ea", "sequi");
                        }};
                        machineType = "esse";
                        metadata = new Metadata() {{
                            fingerprint = "nobis";
                            items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                                add(new MetadataItems() {{
                                    key = "totam";
                                    value = "corporis";
                                }}),
                                add(new MetadataItems() {{
                                    key = "maxime";
                                    value = "adipisci";
                                }}),
                                add(new MetadataItems() {{
                                    key = "delectus";
                                    value = "repudiandae";
                                }}),
                            }};
                            kind = "autem";
                        }};;
                        minCpuPlatform = "nostrum";
                        networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ut";
                                        externalIpv6PrefixLength = 819959;
                                        kind = "harum";
                                        name = "Dominick Mraz";
                                        natIP = "quam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "sint";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "a";
                                        externalIpv6PrefixLength = 75854;
                                        kind = "velit";
                                        name = "Winston Cummerata";
                                        natIP = "libero";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "porro";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "expedita";
                                        subnetworkRangeName = "voluptatibus";
                                    }}),
                                }};
                                fingerprint = "eius";
                                internalIpv6PrefixLength = 976121;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "pariatur";
                                        externalIpv6PrefixLength = 878257;
                                        kind = "quibusdam";
                                        name = "Joann Jenkins";
                                        natIP = "officiis";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "modi";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                                ipv6Address = "beatae";
                                kind = "eligendi";
                                name = "Miss Sergio Lemke";
                                network = "assumenda";
                                networkAttachment = "veniam";
                                networkIP = "quis";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 965145;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                                subnetwork = "iste";
                            }}),
                            add(new NetworkInterface() {{
                                accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "sunt";
                                        externalIpv6PrefixLength = 799388;
                                        kind = "labore";
                                        name = "Kurt Mosciski";
                                        natIP = "nesciunt";
                                        networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                        publicPtrDomainName = "vel";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "beatae";
                                        externalIpv6PrefixLength = 756112;
                                        kind = "eos";
                                        name = "Marianne Effertz";
                                        natIP = "voluptate";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                        publicPtrDomainName = "consequatur";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "ab";
                                        externalIpv6PrefixLength = 448314;
                                        kind = "optio";
                                        name = "Carl Dach";
                                        natIP = "nam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "laudantium";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                }};
                                aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "a";
                                        subnetworkRangeName = "necessitatibus";
                                    }}),
                                    add(new AliasIpRange() {{
                                        ipCidrRange = "explicabo";
                                        subnetworkRangeName = "eos";
                                    }}),
                                }};
                                fingerprint = "quo";
                                internalIpv6PrefixLength = 855029;
                                ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                    add(new AccessConfig() {{
                                        externalIpv6 = "optio";
                                        externalIpv6PrefixLength = 732906;
                                        kind = "est";
                                        name = "May Rogahn";
                                        natIP = "quisquam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "amet";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.DIRECT_IPV6;
                                    }}),
                                    add(new AccessConfig() {{
                                        externalIpv6 = "fuga";
                                        externalIpv6PrefixLength = 951070;
                                        kind = "aliquid";
                                        name = "Ralph Fisher";
                                        natIP = "veniam";
                                        networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                        publicPtrDomainName = "delectus";
                                        setPublicPtr = false;
                                        type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                    }}),
                                }};
                                ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                                ipv6Address = "saepe";
                                kind = "quod";
                                name = "Angelina Swaniawski";
                                network = "inventore";
                                networkAttachment = "ea";
                                networkIP = "repellat";
                                nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                                queueCount = 964151;
                                stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                                subnetwork = "nihil";
                            }}),
                        }};
                        networkPerformanceConfig = new NetworkPerformanceConfig() {{
                            totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.TIER1;
                        }};;
                        postKeyRevocationActionType = InstancePropertiesPostKeyRevocationActionTypeEnum.SHUTDOWN;
                        privateIpv6GoogleAccess = InstancePropertiesPrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                        reservationAffinity = new ReservationAffinity() {{
                            consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                            key = "ipsa";
                            values = new String[]{{
                                add("placeat"),
                                add("aliquid"),
                                add("sit"),
                                add("vero"),
                            }};
                        }};;
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("aut", "reprehenderit");
                            put("nostrum", "praesentium");
                        }};
                        resourcePolicies = new String[]{{
                            add("numquam"),
                            add("fugiat"),
                            add("autem"),
                        }};
                        scheduling = new Scheduling() {{
                            automaticRestart = false;
                            hostErrorTimeoutSeconds = 88684;
                            instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                            locationHint = "illo";
                            maintenanceFreezeDurationHours = 271266;
                            maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                            maxRunDuration = new Duration() {{
                                nanos = 787873;
                                seconds = "facere";
                            }};;
                            minNodeCpus = 566111;
                            nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                                add(new SchedulingNodeAffinity() {{
                                    key = "aspernatur";
                                    operator = SchedulingNodeAffinityOperatorEnum.IN;
                                    values = new String[]{{
                                        add("recusandae"),
                                        add("neque"),
                                    }};
                                }}),
                            }};
                            onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                            preemptible = false;
                            provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                            terminationTime = "eaque";
                        }};;
                        serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                            add(new ServiceAccount() {{
                                email = "Ike.Klocko63@yahoo.com";
                                scopes = new String[]{{
                                    add("eius"),
                                    add("iste"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Lizzie_Predovic49@gmail.com";
                                scopes = new String[]{{
                                    add("beatae"),
                                    add("cum"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Alisha.Johnson19@gmail.com";
                                scopes = new String[]{{
                                    add("accusantium"),
                                    add("dolorem"),
                                    add("debitis"),
                                    add("voluptas"),
                                }};
                            }}),
                            add(new ServiceAccount() {{
                                email = "Jon62@yahoo.com";
                                scopes = new String[]{{
                                    add("officiis"),
                                    add("omnis"),
                                    add("cupiditate"),
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
                            fingerprint = "earum";
                            items = new String[]{{
                                add("repellendus"),
                                add("necessitatibus"),
                                add("unde"),
                                add("voluptates"),
                            }};
                        }};;
                    }};;
                    locationPolicy = new LocationPolicy() {{
                        locations = new java.util.HashMap<String, org.openapis.openapi.models.shared.LocationPolicyLocation>() {{
                            put("odit", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 614775;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.PREFERENCE_UNSPECIFIED;
                            }});
                            put("error", new LocationPolicyLocation() {{
                                constraints = new LocationPolicyLocationConstraints() {{
                                    maxCount = 858227;
                                }};
                                preference = LocationPolicyLocationPreferenceEnum.ALLOW;
                            }});
                        }};
                        targetShape = LocationPolicyTargetShapeEnum.BALANCED;
                    }};;
                    minCount = "eos";
                    namePattern = "pariatur";
                    perInstanceProperties = new java.util.HashMap<String, org.openapis.openapi.models.shared.BulkInsertInstanceResourcePerInstanceProperties>() {{
                        put("fuga", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Hazel Howe DDS";
                        }});
                        put("fuga", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Melissa Stanton";
                        }});
                        put("neque", new BulkInsertInstanceResourcePerInstanceProperties() {{
                            name = "Bobby Will";
                        }});
                    }};
                    sourceInstanceTemplate = "maiores";
                }};;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "at";
                key = "quisquam";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "possimus";
                requestId = "praesentium";
                uploadType = "facere";
                uploadProtocol = "fuga";
                userIp = "minima";
            }};            

            ComputeInstancesBulkInsertResponse res = sdk.instances.computeInstancesBulkInsert(req, new ComputeInstancesBulkInsertSecurity() {{
                option1 = new ComputeInstancesBulkInsertSecurityOption1("voluptas", "et") {{
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

            ComputeInstancesDeleteRequest req = new ComputeInstancesDeleteRequest("explicabo", "sed", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "quas";
                key = "asperiores";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "quam";
                requestId = "voluptate";
                uploadType = "dolore";
                uploadProtocol = "praesentium";
                userIp = "exercitationem";
            }};            

            ComputeInstancesDeleteResponse res = sdk.instances.computeInstancesDelete(req, new ComputeInstancesDeleteSecurity() {{
                option1 = new ComputeInstancesDeleteSecurityOption1("quo", "et") {{
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

            ComputeInstancesDeleteAccessConfigRequest req = new ComputeInstancesDeleteAccessConfigRequest("cupiditate", "in", "voluptas", "similique", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "culpa";
                key = "reprehenderit";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "blanditiis";
                uploadType = "unde";
                uploadProtocol = "hic";
                userIp = "maxime";
            }};            

            ComputeInstancesDeleteAccessConfigResponse res = sdk.instances.computeInstancesDeleteAccessConfig(req, new ComputeInstancesDeleteAccessConfigSecurity() {{
                option1 = new ComputeInstancesDeleteAccessConfigSecurityOption1("numquam", "ut") {{
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

            ComputeInstancesDetachDiskRequest req = new ComputeInstancesDetachDiskRequest("fugiat", "facilis", "dolores", "quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "officiis";
                key = "ullam";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                requestId = "in";
                uploadType = "minus";
                uploadProtocol = "voluptas";
                userIp = "quibusdam";
            }};            

            ComputeInstancesDetachDiskResponse res = sdk.instances.computeInstancesDetachDisk(req, new ComputeInstancesDetachDiskSecurity() {{
                option1 = new ComputeInstancesDetachDiskSecurityOption1("aut", "quod") {{
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

            ComputeInstancesGetRequest req = new ComputeInstancesGetRequest("rerum", "cumque", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "dolor";
                key = "modi";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "repellat";
                uploadProtocol = "ea";
                userIp = "fugit";
            }};            

            ComputeInstancesGetResponse res = sdk.instances.computeInstancesGet(req, new ComputeInstancesGetSecurity() {{
                option1 = new ComputeInstancesGetSecurityOption1("consectetur", "tempore") {{
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

            ComputeInstancesGetEffectiveFirewallsRequest req = new ComputeInstancesGetEffectiveFirewallsRequest("minus", "repudiandae", "quisquam", "mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "voluptates";
                key = "recusandae";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "voluptatem";
                uploadProtocol = "pariatur";
                userIp = "officia";
            }};            

            ComputeInstancesGetEffectiveFirewallsResponse res = sdk.instances.computeInstancesGetEffectiveFirewalls(req, new ComputeInstancesGetEffectiveFirewallsSecurity() {{
                option1 = new ComputeInstancesGetEffectiveFirewallsSecurityOption1("quas", "cum") {{
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

            ComputeInstancesGetGuestAttributesRequest req = new ComputeInstancesGetGuestAttributesRequest("sint", "laborum", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "ullam";
                key = "incidunt";
                oauthToken = "deleniti";
                prettyPrint = false;
                queryPath = "nisi";
                quotaUser = "repudiandae";
                uploadType = "odio";
                uploadProtocol = "libero";
                userIp = "aliquam";
                variableKey = "quasi";
            }};            

            ComputeInstancesGetGuestAttributesResponse res = sdk.instances.computeInstancesGetGuestAttributes(req, new ComputeInstancesGetGuestAttributesSecurity() {{
                option1 = new ComputeInstancesGetGuestAttributesSecurityOption1("ipsum", "quo") {{
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

            ComputeInstancesGetIamPolicyRequest req = new ComputeInstancesGetIamPolicyRequest("expedita", "saepe", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "assumenda";
                key = "placeat";
                oauthToken = "illo";
                optionsRequestedPolicyVersion = 760272L;
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "adipisci";
                uploadProtocol = "pariatur";
                userIp = "modi";
            }};            

            ComputeInstancesGetIamPolicyResponse res = sdk.instances.computeInstancesGetIamPolicy(req, new ComputeInstancesGetIamPolicySecurity() {{
                option1 = new ComputeInstancesGetIamPolicySecurityOption1("doloremque", "doloribus") {{
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

            ComputeInstancesGetScreenshotRequest req = new ComputeInstancesGetScreenshotRequest("aliquid", "illo", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "ad";
                key = "esse";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "debitis";
                uploadProtocol = "enim";
                userIp = "itaque";
            }};            

            ComputeInstancesGetScreenshotResponse res = sdk.instances.computeInstancesGetScreenshot(req, new ComputeInstancesGetScreenshotSecurity() {{
                option1 = new ComputeInstancesGetScreenshotSecurityOption1("saepe", "non") {{
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

            ComputeInstancesGetSerialPortOutputRequest req = new ComputeInstancesGetSerialPortOutputRequest("hic", "esse", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "consequatur";
                key = "nihil";
                oauthToken = "esse";
                port = 157014L;
                prettyPrint = false;
                quotaUser = "maiores";
                start = "adipisci";
                uploadType = "odit";
                uploadProtocol = "itaque";
                userIp = "dolorem";
            }};            

            ComputeInstancesGetSerialPortOutputResponse res = sdk.instances.computeInstancesGetSerialPortOutput(req, new ComputeInstancesGetSerialPortOutputSecurity() {{
                option1 = new ComputeInstancesGetSerialPortOutputSecurityOption1("distinctio", "incidunt") {{
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

            ComputeInstancesGetShieldedInstanceIdentityRequest req = new ComputeInstancesGetShieldedInstanceIdentityRequest("perspiciatis", "pariatur", "facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "non";
                key = "harum";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "suscipit";
                uploadProtocol = "fugiat";
                userIp = "perspiciatis";
            }};            

            ComputeInstancesGetShieldedInstanceIdentityResponse res = sdk.instances.computeInstancesGetShieldedInstanceIdentity(req, new ComputeInstancesGetShieldedInstanceIdentitySecurity() {{
                option1 = new ComputeInstancesGetShieldedInstanceIdentitySecurityOption1("cupiditate", "dolore") {{
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

            ComputeInstancesGetShieldedVmIdentityRequest req = new ComputeInstancesGetShieldedVmIdentityRequest("quas", "assumenda", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "eius";
                key = "voluptate";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "deleniti";
                uploadProtocol = "eaque";
                userIp = "reiciendis";
            }};            

            ComputeInstancesGetShieldedVmIdentityResponse res = sdk.instances.computeInstancesGetShieldedVmIdentity(req, new ComputeInstancesGetShieldedVmIdentitySecurity() {{
                option1 = new ComputeInstancesGetShieldedVmIdentitySecurityOption1("minus", "iure") {{
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceStatusScheduling;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.ShieldedVmIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesInsertRequest req = new ComputeInstancesInsertRequest("laborum", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                instance = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        threadsPerCore = 643400;
                        visibleCoreCount = 504685;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "dolores";
                    creationTimestamp = "necessitatibus";
                    deletionProtection = false;
                    description = "nemo";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARM64;
                            autoDelete = false;
                            boot = false;
                            deviceName = "eos";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "delectus";
                                kmsKeyServiceAccount = "illum";
                                rawKey = "consequuntur";
                                rsaEncryptedKey = "praesentium";
                                sha256 = "fugiat";
                            }};
                            diskSizeGb = "beatae";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                }}),
                            }};
                            index = 47905;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.X8664;
                                description = "iusto";
                                diskName = "debitis";
                                diskSizeGb = "sint";
                                diskType = "beatae";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "distinctio");
                                }};
                                licenses = new String[]{{
                                    add("quaerat"),
                                    add("eligendi"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "architecto";
                                provisionedThroughput = "totam";
                                replicaZones = new String[]{{
                                    add("nemo"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("aperiam", "blanditiis");
                                }};
                                resourcePolicies = new String[]{{
                                    add("eius"),
                                    add("suscipit"),
                                    add("inventore"),
                                    add("quisquam"),
                                }};
                                sourceImage = "accusamus";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "quis";
                                    kmsKeyServiceAccount = "nesciunt";
                                    rawKey = "necessitatibus";
                                    rsaEncryptedKey = "excepturi";
                                    sha256 = "illo";
                                }};
                                sourceSnapshot = "tempora";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "ut";
                                    kmsKeyServiceAccount = "perspiciatis";
                                    rawKey = "rem";
                                    rsaEncryptedKey = "animi";
                                    sha256 = "iste";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "deserunt";
                            licenses = new String[]{{
                                add("nisi"),
                                add("aperiam"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "pariatur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "temporibus";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "non";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "doloremque";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "odio";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "animi";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "sunt";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "consequuntur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "modi";
                                    fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                }};
                            }};
                            source = "fugiat";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("odit"),
                                add("quis"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "amet";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "eligendi";
                                kmsKeyServiceAccount = "laborum";
                                rawKey = "delectus";
                                rsaEncryptedKey = "reiciendis";
                                sha256 = "minus";
                            }};
                            diskSizeGb = "inventore";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.WINDOWS;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.WINDOWS;
                                }}),
                            }};
                            index = 654263;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "quaerat";
                                diskName = "quis";
                                diskSizeGb = "dolores";
                                diskType = "dignissimos";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("non", "ut");
                                    put("ipsa", "saepe");
                                    put("id", "occaecati");
                                    put("corrupti", "nam");
                                }};
                                licenses = new String[]{{
                                    add("placeat"),
                                    add("porro"),
                                    add("itaque"),
                                    add("accusantium"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "voluptatum";
                                provisionedThroughput = "nisi";
                                replicaZones = new String[]{{
                                    add("necessitatibus"),
                                    add("perferendis"),
                                    add("repellendus"),
                                    add("ipsam"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("repellendus", "nihil");
                                    put("non", "distinctio");
                                }};
                                resourcePolicies = new String[]{{
                                    add("quae"),
                                }};
                                sourceImage = "quis";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "nemo";
                                    kmsKeyServiceAccount = "accusantium";
                                    rawKey = "neque";
                                    rsaEncryptedKey = "voluptates";
                                    sha256 = "totam";
                                }};
                                sourceSnapshot = "fugiat";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "impedit";
                                    kmsKeyServiceAccount = "autem";
                                    rawKey = "explicabo";
                                    rsaEncryptedKey = "ea";
                                    sha256 = "doloribus";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "nihil";
                            licenses = new String[]{{
                                add("impedit"),
                                add("iure"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "odio";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "delectus";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "reprehenderit";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "recusandae";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "vero";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "sapiente";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "impedit";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "dolorum";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ab";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "maxime";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "qui";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                            userLicenses = new String[]{{
                                add("modi"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "aperiam";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "alias";
                                kmsKeyServiceAccount = "aut";
                                rawKey = "quae";
                                rsaEncryptedKey = "tempora";
                                sha256 = "repudiandae";
                            }};
                            diskSizeGb = "hic";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                }}),
                            }};
                            index = 888573;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARM64;
                                description = "dicta";
                                diskName = "vitae";
                                diskSizeGb = "laborum";
                                diskType = "minus";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quidem", "suscipit");
                                    put("nostrum", "corrupti");
                                    put("odio", "tenetur");
                                }};
                                licenses = new String[]{{
                                    add("eius"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "magnam";
                                provisionedThroughput = "quae";
                                replicaZones = new String[]{{
                                    add("placeat"),
                                    add("ipsam"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("sint", "est");
                                    put("quod", "voluptates");
                                    put("debitis", "non");
                                }};
                                resourcePolicies = new String[]{{
                                    add("perferendis"),
                                }};
                                sourceImage = "mollitia";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "voluptates";
                                    kmsKeyServiceAccount = "provident";
                                    rawKey = "doloribus";
                                    rsaEncryptedKey = "unde";
                                    sha256 = "magni";
                                }};
                                sourceSnapshot = "minus";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "id";
                                    kmsKeyServiceAccount = "earum";
                                    rawKey = "architecto";
                                    rsaEncryptedKey = "nobis";
                                    sha256 = "ipsa";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "nemo";
                            licenses = new String[]{{
                                add("architecto"),
                                add("pariatur"),
                                add("vitae"),
                                add("magnam"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "voluptatum";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "voluptatibus";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "explicabo";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "quibusdam";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "cumque";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "commodi";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "veniam";
                                    fileType = FileContentBufferFileTypeEnum.X509;
                                }};
                            }};
                            source = "excepturi";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                            userLicenses = new String[]{{
                                add("in"),
                                add("magni"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "at";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "nulla";
                                kmsKeyServiceAccount = "dicta";
                                rawKey = "incidunt";
                                rsaEncryptedKey = "doloribus";
                                sha256 = "porro";
                            }};
                            diskSizeGb = "eius";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                }}),
                            }};
                            index = 447342;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "distinctio";
                                diskName = "maxime";
                                diskSizeGb = "fuga";
                                diskType = "laudantium";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quo", "labore");
                                }};
                                licenses = new String[]{{
                                    add("ipsum"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                provisionedIops = "inventore";
                                provisionedThroughput = "quisquam";
                                replicaZones = new String[]{{
                                    add("at"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("beatae", "necessitatibus");
                                    put("harum", "deleniti");
                                    put("maiores", "odio");
                                    put("tenetur", "quam");
                                }};
                                resourcePolicies = new String[]{{
                                    add("sapiente"),
                                    add("magnam"),
                                }};
                                sourceImage = "hic";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "aspernatur";
                                    kmsKeyServiceAccount = "ipsum";
                                    rawKey = "doloribus";
                                    rsaEncryptedKey = "quasi";
                                    sha256 = "cumque";
                                }};
                                sourceSnapshot = "eaque";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "error";
                                    kmsKeyServiceAccount = "corporis";
                                    rawKey = "totam";
                                    rsaEncryptedKey = "commodi";
                                    sha256 = "maxime";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "mollitia";
                            licenses = new String[]{{
                                add("odio"),
                                add("temporibus"),
                                add("reprehenderit"),
                                add("soluta"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "reiciendis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "voluptates";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "officiis";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "eius";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "perspiciatis";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "nam";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "pariatur";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "eveniet";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "earum";
                                    fileType = FileContentBufferFileTypeEnum.X509;
                                }};
                            }};
                            source = "voluptatibus";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                            userLicenses = new String[]{{
                                add("non"),
                                add("tempore"),
                                add("quae"),
                                add("quis"),
                            }};
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    eraseWindowsVssSignature = false;
                    fingerprint = "commodi";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 577429;
                            acceleratorType = "odit";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 496498;
                            acceleratorType = "corrupti";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 162787;
                            acceleratorType = "voluptate";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 371545;
                            acceleratorType = "debitis";
                        }}),
                    }};
                    hostname = "utilized-pavilion.info";
                    id = "laboriosam";
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "laudantium";
                        kmsKeyServiceAccount = "quasi";
                        rawKey = "nihil";
                        rsaEncryptedKey = "labore";
                        sha256 = "laboriosam";
                    }};;
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.NONE;
                    kind = "quae";
                    labelFingerprint = "nisi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("tenetur", "ducimus");
                    }};
                    lastStartTimestamp = "perspiciatis";
                    lastStopTimestamp = "cupiditate";
                    lastSuspendedTimestamp = "facilis";
                    machineType = "iusto";
                    metadata = new Metadata() {{
                        fingerprint = "perspiciatis";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "ex";
                                value = "maxime";
                            }}),
                            add(new MetadataItems() {{
                                key = "quae";
                                value = "quidem";
                            }}),
                        }};
                        kind = "voluptatem";
                    }};;
                    minCpuPlatform = "tenetur";
                    name = "Mark Powlowski";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "labore";
                                    externalIpv6PrefixLength = 10807;
                                    kind = "voluptates";
                                    name = "Krista Goyette";
                                    natIP = "aliquid";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicPtrDomainName = "eaque";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "eius";
                                    externalIpv6PrefixLength = 159997;
                                    kind = "iusto";
                                    name = "Wilma Heaney";
                                    natIP = "voluptatem";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "culpa";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "voluptate";
                                    externalIpv6PrefixLength = 811073;
                                    kind = "perferendis";
                                    name = "Amos Stokes";
                                    natIP = "magni";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "eligendi";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "reprehenderit";
                                    subnetworkRangeName = "iste";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "ratione";
                                    subnetworkRangeName = "consequatur";
                                }}),
                            }};
                            fingerprint = "pariatur";
                            internalIpv6PrefixLength = 431434;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "sit";
                                    externalIpv6PrefixLength = 618943;
                                    kind = "dolorem";
                                    name = "Earl Towne";
                                    natIP = "aliquam";
                                    networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                                    publicPtrDomainName = "temporibus";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "autem";
                                    externalIpv6PrefixLength = 409341;
                                    kind = "nulla";
                                    name = "Mr. Orlando Block MD";
                                    natIP = "voluptatem";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "et";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "dolor";
                                    externalIpv6PrefixLength = 900911;
                                    kind = "porro";
                                    name = "Garry Heller";
                                    natIP = "nisi";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "nulla";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "illo";
                                    externalIpv6PrefixLength = 682309;
                                    kind = "molestias";
                                    name = "Gerald Gutmann";
                                    natIP = "reprehenderit";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "voluptates";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "illo";
                            kind = "asperiores";
                            name = "Mrs. Jeffrey Flatley";
                            network = "asperiores";
                            networkAttachment = "quo";
                            networkIP = "adipisci";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            queueCount = 512486;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                            subnetwork = "natus";
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("hic", "hic");
                            put("error", "ea");
                            put("repellendus", "vitae");
                            put("pariatur", "sequi");
                        }};
                    }};;
                    postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum.NOOP;
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.SPECIFIC_RESERVATION;
                        key = "alias";
                        values = new String[]{{
                            add("quo"),
                            add("quasi"),
                            add("ullam"),
                            add("reprehenderit"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("cumque"),
                        add("molestias"),
                        add("asperiores"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "accusamus";
                        scheduling = new ResourceStatusScheduling() {{
                            terminationTimestamp = "dicta";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        hostErrorTimeoutSeconds = 575324;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.INSTANCE_TERMINATION_ACTION_UNSPECIFIED;
                        locationHint = "vitae";
                        maintenanceFreezeDurationHours = 752961;
                        maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                        maxRunDuration = new Duration() {{
                            nanos = 879440;
                            seconds = "perspiciatis";
                        }};;
                        minNodeCpus = 722768;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "aliquam";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("atque"),
                                    add("nisi"),
                                    add("omnis"),
                                    add("nulla"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "facere";
                                operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                                values = new String[]{{
                                    add("omnis"),
                                    add("molestiae"),
                                    add("illo"),
                                    add("unde"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "repellendus";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("harum"),
                                    add("odit"),
                                }};
                            }}),
                            add(new SchedulingNodeAffinity() {{
                                key = "aut";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("corporis"),
                                    add("praesentium"),
                                    add("delectus"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                        terminationTime = "consequuntur";
                    }};;
                    selfLink = "iste";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Ruthe_Willms@yahoo.com";
                            scopes = new String[]{{
                                add("laudantium"),
                                add("praesentium"),
                                add("sed"),
                                add("fuga"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Shannon73@yahoo.com";
                            scopes = new String[]{{
                                add("commodi"),
                                add("eos"),
                                add("perferendis"),
                                add("eligendi"),
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
                    shieldedVmConfig = new ShieldedVmConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "facere";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "molestias";
                        kmsKeyServiceAccount = "quisquam";
                        rawKey = "veniam";
                        rsaEncryptedKey = "officia";
                        sha256 = "sapiente";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.SUSPENDING;
                    statusMessage = "quibusdam";
                    tags = new Tags() {{
                        fingerprint = "doloremque";
                        items = new String[]{{
                            add("eligendi"),
                            add("nesciunt"),
                        }};
                    }};;
                    zone = "voluptate";
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "quasi";
                key = "consequuntur";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "mollitia";
                sourceInstanceTemplate = "officiis";
                sourceMachineImage = "quasi";
                uploadType = "vero";
                uploadProtocol = "atque";
                userIp = "voluptate";
            }};            

            ComputeInstancesInsertResponse res = sdk.instances.computeInstancesInsert(req, new ComputeInstancesInsertSecurity() {{
                option1 = new ComputeInstancesInsertSecurityOption1("itaque", "quisquam") {{
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

            ComputeInstancesListRequest req = new ComputeInstancesListRequest("minus", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "animi";
                filter = "deleniti";
                key = "eveniet";
                maxResults = 476192L;
                oauthToken = "laborum";
                orderBy = "voluptatum";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "adipisci";
                returnPartialSuccess = false;
                uploadType = "et";
                uploadProtocol = "et";
                userIp = "commodi";
            }};            

            ComputeInstancesListResponse res = sdk.instances.computeInstancesList(req, new ComputeInstancesListSecurity() {{
                option1 = new ComputeInstancesListSecurityOption1("laboriosam", "ratione") {{
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

            ComputeInstancesListReferrersRequest req = new ComputeInstancesListReferrersRequest("porro", "at", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cumque";
                filter = "sunt";
                key = "fugiat";
                maxResults = 522625L;
                oauthToken = "laboriosam";
                orderBy = "doloremque";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "eum";
                returnPartialSuccess = false;
                uploadType = "odit";
                uploadProtocol = "nesciunt";
                userIp = "esse";
            }};            

            ComputeInstancesListReferrersResponse res = sdk.instances.computeInstancesListReferrers(req, new ComputeInstancesListReferrersSecurity() {{
                option1 = new ComputeInstancesListReferrersSecurityOption1("quibusdam", "tempora") {{
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

            ComputeInstancesRemoveResourcePoliciesRequest req = new ComputeInstancesRemoveResourcePoliciesRequest("explicabo", "magni", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesRemoveResourcePoliciesRequest = new InstancesRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("aliquid"),
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "molestiae";
                key = "labore";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "consectetur";
                uploadType = "provident";
                uploadProtocol = "totam";
                userIp = "incidunt";
            }};            

            ComputeInstancesRemoveResourcePoliciesResponse res = sdk.instances.computeInstancesRemoveResourcePolicies(req, new ComputeInstancesRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeInstancesRemoveResourcePoliciesSecurityOption1("exercitationem", "quasi") {{
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

            ComputeInstancesResetRequest req = new ComputeInstancesResetRequest("beatae", "impedit", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "asperiores";
                key = "alias";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "voluptatem";
                uploadType = "non";
                uploadProtocol = "soluta";
                userIp = "minima";
            }};            

            ComputeInstancesResetResponse res = sdk.instances.computeInstancesReset(req, new ComputeInstancesResetSecurity() {{
                option1 = new ComputeInstancesResetSecurityOption1("tempore", "rerum") {{
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

            ComputeInstancesResumeRequest req = new ComputeInstancesResumeRequest("molestiae", "ipsam", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesResumeRequest = new InstancesResumeRequest() {{
                    disks = new org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk[]{{
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "cupiditate";
                                kmsKeyServiceAccount = "tempora";
                                rawKey = "exercitationem";
                                rsaEncryptedKey = "voluptas";
                                sha256 = "quia";
                            }};
                            source = "delectus";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "alias";
                                kmsKeyServiceAccount = "consequatur";
                                rawKey = "suscipit";
                                rsaEncryptedKey = "occaecati";
                                sha256 = "ea";
                            }};
                            source = "rem";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "nemo";
                                kmsKeyServiceAccount = "a";
                                rawKey = "maxime";
                                rsaEncryptedKey = "possimus";
                                sha256 = "quasi";
                            }};
                            source = "est";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "vitae";
                                kmsKeyServiceAccount = "nihil";
                                rawKey = "consectetur";
                                rsaEncryptedKey = "illum";
                                sha256 = "laudantium";
                            }};
                            source = "non";
                        }}),
                    }};
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "libero";
                        kmsKeyServiceAccount = "cum";
                        rawKey = "saepe";
                        rsaEncryptedKey = "odit";
                        sha256 = "modi";
                    }};;
                }};;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "praesentium";
                key = "sequi";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "doloribus";
                uploadType = "harum";
                uploadProtocol = "doloremque";
                userIp = "odio";
            }};            

            ComputeInstancesResumeResponse res = sdk.instances.computeInstancesResume(req, new ComputeInstancesResumeSecurity() {{
                option1 = new ComputeInstancesResumeSecurityOption1("ratione", "corporis") {{
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

            ComputeInstancesSendDiagnosticInterruptRequest req = new ComputeInstancesSendDiagnosticInterruptRequest("eligendi", "expedita", "laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "labore";
                key = "est";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "est";
                uploadProtocol = "fuga";
                userIp = "est";
            }};            

            ComputeInstancesSendDiagnosticInterruptResponse res = sdk.instances.computeInstancesSendDiagnosticInterrupt(req, new ComputeInstancesSendDiagnosticInterruptSecurity() {{
                option1 = new ComputeInstancesSendDiagnosticInterruptSecurityOption1("quae", "debitis") {{
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

            ComputeInstancesSetDeletionProtectionRequest req = new ComputeInstancesSetDeletionProtectionRequest("quasi", "voluptas", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                deletionProtection = false;
                fields = "voluptate";
                key = "possimus";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "repudiandae";
                uploadType = "eos";
                uploadProtocol = "perferendis";
                userIp = "error";
            }};            

            ComputeInstancesSetDeletionProtectionResponse res = sdk.instances.computeInstancesSetDeletionProtection(req, new ComputeInstancesSetDeletionProtectionSecurity() {{
                option1 = new ComputeInstancesSetDeletionProtectionSecurityOption1("ullam", "voluptatem") {{
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

            ComputeInstancesSetDiskAutoDeleteRequest req = new ComputeInstancesSetDiskAutoDeleteRequest(false, "corporis", "tempore", "maiores", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "repudiandae";
                key = "provident";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "incidunt";
                requestId = "rem";
                uploadType = "sit";
                uploadProtocol = "cumque";
                userIp = "fuga";
            }};            

            ComputeInstancesSetDiskAutoDeleteResponse res = sdk.instances.computeInstancesSetDiskAutoDelete(req, new ComputeInstancesSetDiskAutoDeleteSecurity() {{
                option1 = new ComputeInstancesSetDiskAutoDeleteSecurityOption1("ratione", "in") {{
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

            ComputeInstancesSetIamPolicyRequest req = new ComputeInstancesSetIamPolicyRequest("voluptatibus", "nam", "ab") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "voluptatum";
                            condition = new Expr() {{
                                description = "natus";
                                expression = "eaque";
                                location = "sequi";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("porro"),
                                add("amet"),
                                add("amet"),
                            }};
                            role = "nesciunt";
                        }}),
                        add(new Binding() {{
                            bindingId = "et";
                            condition = new Expr() {{
                                description = "quam";
                                expression = "odit";
                                location = "saepe";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("quibusdam"),
                                add("nihil"),
                                add("provident"),
                                add("recusandae"),
                            }};
                            role = "minus";
                        }}),
                    }};
                    etag = "in";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("necessitatibus"),
                                            add("corrupti"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("at"),
                                            add("expedita"),
                                            add("ipsum"),
                                            add("commodi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("inventore"),
                                            add("eligendi"),
                                            add("optio"),
                                            add("maxime"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dicta"),
                                    add("quisquam"),
                                }};
                                service = "quas";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                            add("dolor"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eius"),
                                            add("doloribus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("voluptate"),
                                    add("incidunt"),
                                    add("eaque"),
                                }};
                                service = "doloribus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "incidunt";
                                condition = new Expr() {{
                                    description = "deserunt";
                                    expression = "distinctio";
                                    location = "magnam";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("impedit"),
                                }};
                                role = "ipsum";
                            }}),
                            add(new Binding() {{
                                bindingId = "deserunt";
                                condition = new Expr() {{
                                    description = "doloremque";
                                    expression = "sint";
                                    location = "saepe";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("velit"),
                                    add("perspiciatis"),
                                }};
                                role = "omnis";
                            }}),
                            add(new Binding() {{
                                bindingId = "minima";
                                condition = new Expr() {{
                                    description = "vero";
                                    expression = "rem";
                                    location = "voluptatem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("nam"),
                                    add("accusamus"),
                                    add("odio"),
                                }};
                                role = "natus";
                            }}),
                        }};
                        etag = "dolore";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "quo";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "ut";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("rerum"),
                                            add("nemo"),
                                        }};
                                    }}),
                                }};
                                description = "cupiditate";
                                ins = new String[]{{
                                    add("voluptatum"),
                                    add("dolor"),
                                    add("commodi"),
                                    add("ea"),
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
                                                    name = "Gladys Harris";
                                                    value = "quia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Henry Quitzon";
                                                    value = "ad";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dwight Lindgren";
                                                    value = "omnis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terrell Muller";
                                                    value = "necessitatibus";
                                                }}),
                                            }};
                                            field = "omnis";
                                            metric = "eaque";
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
                                                    name = "Sandy Stokes Sr.";
                                                    value = "dolore";
                                                }}),
                                            }};
                                            field = "fugit";
                                            metric = "alias";
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
                                                    name = "Mr. Kim Gerlach";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clay Kohler";
                                                    value = "nihil";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elbert Wiegand";
                                                    value = "voluptatum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Luke Turcotte";
                                                    value = "libero";
                                                }}),
                                            }};
                                            field = "tempore";
                                            metric = "odio";
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
                                                    name = "Mrs. Elvira Marks";
                                                    value = "inventore";
                                                }}),
                                            }};
                                            field = "harum";
                                            metric = "quidem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("eum"),
                                    add("adipisci"),
                                }};
                                permissions = new String[]{{
                                    add("iure"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "odio";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("mollitia"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                }};
                                description = "dolorem";
                                ins = new String[]{{
                                    add("ipsam"),
                                    add("fuga"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Rachel Klocko Jr.";
                                                    value = "quo";
                                                }}),
                                            }};
                                            field = "alias";
                                            metric = "illum";
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
                                                    name = "Jody Kutch";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tommie Wilkinson";
                                                    value = "ullam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Cecelia Metz";
                                                    value = "necessitatibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Roland Bode";
                                                    value = "soluta";
                                                }}),
                                            }};
                                            field = "ut";
                                            metric = "at";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("molestiae"),
                                    add("tempore"),
                                    add("facere"),
                                }};
                                permissions = new String[]{{
                                    add("perspiciatis"),
                                    add("quisquam"),
                                    add("molestias"),
                                    add("corrupti"),
                                }};
                            }}),
                        }};
                        version = 362377;
                    }};;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "iusto";
                key = "adipisci";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "quis";
                uploadProtocol = "pariatur";
                userIp = "reprehenderit";
            }};            

            ComputeInstancesSetIamPolicyResponse res = sdk.instances.computeInstancesSetIamPolicy(req, new ComputeInstancesSetIamPolicySecurity() {{
                option1 = new ComputeInstancesSetIamPolicySecurityOption1("odit", "quibusdam") {{
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

            ComputeInstancesSetLabelsRequest req = new ComputeInstancesSetLabelsRequest("cupiditate", "itaque", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetLabelsRequest = new InstancesSetLabelsRequest() {{
                    labelFingerprint = "in";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nostrum", "expedita");
                        put("vero", "quis");
                        put("earum", "esse");
                    }};
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "ullam";
                key = "minima";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "nihil";
                uploadType = "tempore";
                uploadProtocol = "mollitia";
                userIp = "laboriosam";
            }};            

            ComputeInstancesSetLabelsResponse res = sdk.instances.computeInstancesSetLabels(req, new ComputeInstancesSetLabelsSecurity() {{
                option1 = new ComputeInstancesSetLabelsSecurityOption1("explicabo", "laudantium") {{
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

            ComputeInstancesSetMachineResourcesRequest req = new ComputeInstancesSetMachineResourcesRequest("sunt", "repellat", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetMachineResourcesRequest = new InstancesSetMachineResourcesRequest() {{
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 210926;
                            acceleratorType = "laborum";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 180326;
                            acceleratorType = "dolor";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 234935;
                            acceleratorType = "unde";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 262936;
                            acceleratorType = "id";
                        }}),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "optio";
                key = "deleniti";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "ratione";
                uploadType = "alias";
                uploadProtocol = "delectus";
                userIp = "hic";
            }};            

            ComputeInstancesSetMachineResourcesResponse res = sdk.instances.computeInstancesSetMachineResources(req, new ComputeInstancesSetMachineResourcesSecurity() {{
                option1 = new ComputeInstancesSetMachineResourcesSecurityOption1("ducimus", "dolores") {{
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

            ComputeInstancesSetMachineTypeRequest req = new ComputeInstancesSetMachineTypeRequest("illo", "aliquid", "quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMachineTypeRequest = new InstancesSetMachineTypeRequest() {{
                    machineType = "alias";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "repellat";
                key = "voluptates";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "iste";
                uploadType = "autem";
                uploadProtocol = "minima";
                userIp = "nemo";
            }};            

            ComputeInstancesSetMachineTypeResponse res = sdk.instances.computeInstancesSetMachineType(req, new ComputeInstancesSetMachineTypeSecurity() {{
                option1 = new ComputeInstancesSetMachineTypeSecurityOption1("adipisci", "tempore") {{
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

            ComputeInstancesSetMetadataRequest req = new ComputeInstancesSetMetadataRequest("praesentium", "excepturi", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                metadata = new Metadata() {{
                    fingerprint = "consequatur";
                    items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                        add(new MetadataItems() {{
                            key = "excepturi";
                            value = "quod";
                        }}),
                    }};
                    kind = "vel";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "temporibus";
                key = "debitis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "nam";
                requestId = "ipsum";
                uploadType = "voluptas";
                uploadProtocol = "voluptas";
                userIp = "aspernatur";
            }};            

            ComputeInstancesSetMetadataResponse res = sdk.instances.computeInstancesSetMetadata(req, new ComputeInstancesSetMetadataSecurity() {{
                option1 = new ComputeInstancesSetMetadataSecurityOption1("sed", "eaque") {{
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

            ComputeInstancesSetMinCpuPlatformRequest req = new ComputeInstancesSetMinCpuPlatformRequest("veritatis", "officia", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesSetMinCpuPlatformRequest = new InstancesSetMinCpuPlatformRequest() {{
                    minCpuPlatform = "error";
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "voluptates";
                key = "in";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "vitae";
                requestId = "fuga";
                uploadType = "ipsam";
                uploadProtocol = "harum";
                userIp = "omnis";
            }};            

            ComputeInstancesSetMinCpuPlatformResponse res = sdk.instances.computeInstancesSetMinCpuPlatform(req, new ComputeInstancesSetMinCpuPlatformSecurity() {{
                option1 = new ComputeInstancesSetMinCpuPlatformSecurityOption1("alias", "rem") {{
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

            ComputeInstancesSetNameRequest req = new ComputeInstancesSetNameRequest("placeat", "dolore", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetNameRequest = new InstancesSetNameRequest() {{
                    currentName = "perferendis";
                    name = "Claire Bergstrom";
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "aliquam";
                key = "error";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "natus";
                uploadType = "reiciendis";
                uploadProtocol = "consequatur";
                userIp = "ipsum";
            }};            

            ComputeInstancesSetNameResponse res = sdk.instances.computeInstancesSetName(req, new ComputeInstancesSetNameSecurity() {{
                option1 = new ComputeInstancesSetNameSecurityOption1("quidem", "dolorum") {{
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

            ComputeInstancesSetSchedulingRequest req = new ComputeInstancesSetSchedulingRequest("quidem", "molestiae", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                scheduling = new Scheduling() {{
                    automaticRestart = false;
                    hostErrorTimeoutSeconds = 580771;
                    instanceTerminationAction = SchedulingInstanceTerminationActionEnum.DELETE;
                    locationHint = "blanditiis";
                    maintenanceFreezeDurationHours = 952546;
                    maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                    maxRunDuration = new Duration() {{
                        nanos = 14866;
                        seconds = "neque";
                    }};;
                    minNodeCpus = 115960;
                    nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                        add(new SchedulingNodeAffinity() {{
                            key = "iste";
                            operator = SchedulingNodeAffinityOperatorEnum.NOT_IN;
                            values = new String[]{{
                                add("exercitationem"),
                                add("sit"),
                            }};
                        }}),
                    }};
                    onHostMaintenance = SchedulingOnHostMaintenanceEnum.MIGRATE;
                    preemptible = false;
                    provisioningModel = SchedulingProvisioningModelEnum.STANDARD;
                    terminationTime = "accusantium";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "impedit";
                key = "quam";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "consectetur";
                uploadType = "itaque";
                uploadProtocol = "impedit";
                userIp = "quidem";
            }};            

            ComputeInstancesSetSchedulingResponse res = sdk.instances.computeInstancesSetScheduling(req, new ComputeInstancesSetSchedulingSecurity() {{
                option1 = new ComputeInstancesSetSchedulingSecurityOption1("voluptatem", "voluptas") {{
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

            ComputeInstancesSetServiceAccountRequest req = new ComputeInstancesSetServiceAccountRequest("aperiam", "numquam", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesSetServiceAccountRequest = new InstancesSetServiceAccountRequest() {{
                    email = "Tierra62@gmail.com";
                    scopes = new String[]{{
                        add("nulla"),
                    }};
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "quis";
                key = "reprehenderit";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "quibusdam";
                uploadType = "debitis";
                uploadProtocol = "rem";
                userIp = "earum";
            }};            

            ComputeInstancesSetServiceAccountResponse res = sdk.instances.computeInstancesSetServiceAccount(req, new ComputeInstancesSetServiceAccountSecurity() {{
                option1 = new ComputeInstancesSetServiceAccountSecurityOption1("molestiae", "hic") {{
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

            ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest req = new ComputeInstancesSetShieldedInstanceIntegrityPolicyRequest("ipsa", "consequatur", "sed") {{
                dollarXgafv = XgafvEnum.TWO;
                shieldedInstanceIntegrityPolicy = new ShieldedInstanceIntegrityPolicy() {{
                    updateAutoLearnPolicy = false;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "ex";
                key = "dolorum";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "excepturi";
                uploadType = "at";
                uploadProtocol = "neque";
                userIp = "animi";
            }};            

            ComputeInstancesSetShieldedInstanceIntegrityPolicyResponse res = sdk.instances.computeInstancesSetShieldedInstanceIntegrityPolicy(req, new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurity() {{
                option1 = new ComputeInstancesSetShieldedInstanceIntegrityPolicySecurityOption1("veritatis", "repellendus") {{
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

            ComputeInstancesSetShieldedVmIntegrityPolicyRequest req = new ComputeInstancesSetShieldedVmIntegrityPolicyRequest("ratione", "odit", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                    updateAutoLearnPolicy = false;
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "ullam";
                key = "rem";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "eveniet";
                uploadType = "atque";
                uploadProtocol = "reiciendis";
                userIp = "qui";
            }};            

            ComputeInstancesSetShieldedVmIntegrityPolicyResponse res = sdk.instances.computeInstancesSetShieldedVmIntegrityPolicy(req, new ComputeInstancesSetShieldedVmIntegrityPolicySecurity() {{
                option1 = new ComputeInstancesSetShieldedVmIntegrityPolicySecurityOption1("officia", "fugiat") {{
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

            ComputeInstancesSetTagsRequest req = new ComputeInstancesSetTagsRequest("laboriosam", "tempore", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                tags = new Tags() {{
                    fingerprint = "aut";
                    items = new String[]{{
                        add("fugit"),
                        add("nostrum"),
                        add("ipsam"),
                        add("reiciendis"),
                    }};
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "corrupti";
                key = "ipsa";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "necessitatibus";
                uploadType = "adipisci";
                uploadProtocol = "ipsum";
                userIp = "ipsa";
            }};            

            ComputeInstancesSetTagsResponse res = sdk.instances.computeInstancesSetTags(req, new ComputeInstancesSetTagsSecurity() {{
                option1 = new ComputeInstancesSetTagsSecurityOption1("totam", "aliquid") {{
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

            ComputeInstancesSimulateMaintenanceEventRequest req = new ComputeInstancesSimulateMaintenanceEventRequest("dignissimos", "exercitationem", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "voluptas";
                key = "molestias";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "deserunt";
                uploadType = "ducimus";
                uploadProtocol = "officiis";
                userIp = "deleniti";
            }};            

            ComputeInstancesSimulateMaintenanceEventResponse res = sdk.instances.computeInstancesSimulateMaintenanceEvent(req, new ComputeInstancesSimulateMaintenanceEventSecurity() {{
                option1 = new ComputeInstancesSimulateMaintenanceEventSecurityOption1("fugit", "eligendi") {{
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

            ComputeInstancesStartRequest req = new ComputeInstancesStartRequest("facere", "doloribus", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "aliquid";
                uploadType = "ea";
                uploadProtocol = "vel";
                userIp = "est";
            }};            

            ComputeInstancesStartResponse res = sdk.instances.computeInstancesStart(req, new ComputeInstancesStartSecurity() {{
                option1 = new ComputeInstancesStartSecurityOption1("sapiente", "nesciunt") {{
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

            ComputeInstancesStartWithEncryptionKeyRequest req = new ComputeInstancesStartWithEncryptionKeyRequest("optio", "ratione", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesStartWithEncryptionKeyRequest = new InstancesStartWithEncryptionKeyRequest() {{
                    disks = new org.openapis.openapi.models.shared.CustomerEncryptionKeyProtectedDisk[]{{
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "totam";
                                kmsKeyServiceAccount = "provident";
                                rawKey = "distinctio";
                                rsaEncryptedKey = "accusamus";
                                sha256 = "est";
                            }};
                            source = "veniam";
                        }}),
                        add(new CustomerEncryptionKeyProtectedDisk() {{
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "possimus";
                                kmsKeyServiceAccount = "dolores";
                                rawKey = "vel";
                                rsaEncryptedKey = "eius";
                                sha256 = "voluptates";
                            }};
                            source = "modi";
                        }}),
                    }};
                }};;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "porro";
                key = "fuga";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "numquam";
                requestId = "corrupti";
                uploadType = "consequuntur";
                uploadProtocol = "consequuntur";
                userIp = "officiis";
            }};            

            ComputeInstancesStartWithEncryptionKeyResponse res = sdk.instances.computeInstancesStartWithEncryptionKey(req, new ComputeInstancesStartWithEncryptionKeySecurity() {{
                option1 = new ComputeInstancesStartWithEncryptionKeySecurityOption1("veniam", "ab") {{
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

            ComputeInstancesStopRequest req = new ComputeInstancesStopRequest("neque", "asperiores", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "magni";
                discardLocalSsd = false;
                fields = "similique";
                key = "possimus";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "quod";
                uploadType = "dolorem";
                uploadProtocol = "eaque";
                userIp = "error";
            }};            

            ComputeInstancesStopResponse res = sdk.instances.computeInstancesStop(req, new ComputeInstancesStopSecurity() {{
                option1 = new ComputeInstancesStopSecurityOption1("occaecati", "voluptatem") {{
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

            ComputeInstancesSuspendRequest req = new ComputeInstancesSuspendRequest("iure", "esse", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                discardLocalSsd = false;
                fields = "deleniti";
                key = "molestiae";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "veritatis";
                uploadType = "commodi";
                uploadProtocol = "amet";
                userIp = "eveniet";
            }};            

            ComputeInstancesSuspendResponse res = sdk.instances.computeInstancesSuspend(req, new ComputeInstancesSuspendSecurity() {{
                option1 = new ComputeInstancesSuspendSecurityOption1("autem", "nihil") {{
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

            ComputeInstancesTestIamPermissionsRequest req = new ComputeInstancesTestIamPermissionsRequest("repellendus", "non", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quae"),
                        add("quis"),
                    }};
                }};;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "aperiam";
                key = "officia";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "labore";
                uploadProtocol = "excepturi";
                userIp = "quisquam";
            }};            

            ComputeInstancesTestIamPermissionsResponse res = sdk.instances.computeInstancesTestIamPermissions(req, new ComputeInstancesTestIamPermissionsSecurity() {{
                option1 = new ComputeInstancesTestIamPermissionsSecurityOption1("ipsum", "quod") {{
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
import org.openapis.openapi.models.shared.NetworkPerformanceConfig;
import org.openapis.openapi.models.shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
import org.openapis.openapi.models.shared.ReservationAffinity;
import org.openapis.openapi.models.shared.ReservationAffinityConsumeReservationTypeEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceStatusScheduling;
import org.openapis.openapi.models.shared.Scheduling;
import org.openapis.openapi.models.shared.SchedulingInstanceTerminationActionEnum;
import org.openapis.openapi.models.shared.SchedulingMaintenanceIntervalEnum;
import org.openapis.openapi.models.shared.SchedulingNodeAffinity;
import org.openapis.openapi.models.shared.SchedulingNodeAffinityOperatorEnum;
import org.openapis.openapi.models.shared.SchedulingOnHostMaintenanceEnum;
import org.openapis.openapi.models.shared.SchedulingProvisioningModelEnum;
import org.openapis.openapi.models.shared.ServiceAccount;
import org.openapis.openapi.models.shared.ShieldedInstanceConfig;
import org.openapis.openapi.models.shared.ShieldedInstanceIntegrityPolicy;
import org.openapis.openapi.models.shared.ShieldedVmConfig;
import org.openapis.openapi.models.shared.ShieldedVmIntegrityPolicy;
import org.openapis.openapi.models.shared.Tags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeInstancesUpdateRequest req = new ComputeInstancesUpdateRequest("voluptatibus", "voluptas", "porro") {{
                dollarXgafv = XgafvEnum.ONE;
                instance1 = new Instance() {{
                    advancedMachineFeatures = new AdvancedMachineFeatures() {{
                        enableNestedVirtualization = false;
                        enableUefiNetworking = false;
                        threadsPerCore = 127908;
                        visibleCoreCount = 471141;
                    }};;
                    canIpForward = false;
                    confidentialInstanceConfig = new ConfidentialInstanceConfig() {{
                        enableConfidentialCompute = false;
                    }};;
                    cpuPlatform = "laboriosam";
                    creationTimestamp = "necessitatibus";
                    deletionProtection = false;
                    description = "dignissimos";
                    disks = new org.openapis.openapi.models.shared.AttachedDisk[]{{
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            autoDelete = false;
                            boot = false;
                            deviceName = "illo";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "facilis";
                                kmsKeyServiceAccount = "dolorum";
                                rawKey = "quibusdam";
                                rsaEncryptedKey = "provident";
                                sha256 = "alias";
                            }};
                            diskSizeGb = "illum";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                                }}),
                            }};
                            index = 283463;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "doloribus";
                                diskName = "nulla";
                                diskSizeGb = "ex";
                                diskType = "cumque";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "saepe");
                                }};
                                licenses = new String[]{{
                                    add("placeat"),
                                    add("odit"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK_IF_SOURCE_CHANGED;
                                provisionedIops = "quam";
                                provisionedThroughput = "atque";
                                replicaZones = new String[]{{
                                    add("quo"),
                                    add("eos"),
                                    add("enim"),
                                    add("commodi"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("veniam", "cum");
                                    put("voluptatem", "sint");
                                    put("consequuntur", "magni");
                                }};
                                resourcePolicies = new String[]{{
                                    add("doloribus"),
                                    add("quod"),
                                }};
                                sourceImage = "placeat";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "numquam";
                                    kmsKeyServiceAccount = "dignissimos";
                                    rawKey = "natus";
                                    rsaEncryptedKey = "natus";
                                    sha256 = "nisi";
                                }};
                                sourceSnapshot = "optio";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "sint";
                                    kmsKeyServiceAccount = "esse";
                                    rawKey = "in";
                                    rsaEncryptedKey = "cum";
                                    sha256 = "soluta";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.SCSI;
                            kind = "ullam";
                            licenses = new String[]{{
                                add("sapiente"),
                                add("ratione"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "eos";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "est";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "laboriosam";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "quo";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "illum";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "iusto";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "ea";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "voluptates";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "similique";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("laboriosam"),
                                add("quos"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                            autoDelete = false;
                            boot = false;
                            deviceName = "vel";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "numquam";
                                kmsKeyServiceAccount = "ad";
                                rawKey = "odio";
                                rsaEncryptedKey = "omnis";
                                sha256 = "quo";
                            }};
                            diskSizeGb = "maiores";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                }}),
                            }};
                            index = 359458;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "dolor";
                                diskName = "maiores";
                                diskSizeGb = "quis";
                                diskType = "vel";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.GVNIC;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.WINDOWS;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("assumenda", "molestias");
                                }};
                                licenses = new String[]{{
                                    add("at"),
                                    add("rem"),
                                    add("quam"),
                                    add("nobis"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.RECREATE_DISK;
                                provisionedIops = "totam";
                                provisionedThroughput = "recusandae";
                                replicaZones = new String[]{{
                                    add("deserunt"),
                                    add("a"),
                                    add("culpa"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("quod", "excepturi");
                                    put("laudantium", "nisi");
                                    put("necessitatibus", "consequuntur");
                                }};
                                resourcePolicies = new String[]{{
                                    add("dicta"),
                                    add("earum"),
                                }};
                                sourceImage = "magnam";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "dolorem";
                                    kmsKeyServiceAccount = "quidem";
                                    rawKey = "consequuntur";
                                    rsaEncryptedKey = "ratione";
                                    sha256 = "ut";
                                }};
                                sourceSnapshot = "explicabo";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "dolore";
                                    kmsKeyServiceAccount = "inventore";
                                    rawKey = "molestiae";
                                    rsaEncryptedKey = "illum";
                                    sha256 = "vitae";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "debitis";
                            licenses = new String[]{{
                                add("sapiente"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_ONLY;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "similique";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "culpa";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "labore";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "necessitatibus";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "expedita";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "id";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "cumque";
                                        fileType = FileContentBufferFileTypeEnum.BIN;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "sint";
                                    fileType = FileContentBufferFileTypeEnum.BIN;
                                }};
                            }};
                            source = "maxime";
                            type = AttachedDiskTypeEnum.PERSISTENT;
                            userLicenses = new String[]{{
                                add("deleniti"),
                                add("quidem"),
                                add("mollitia"),
                                add("corporis"),
                            }};
                        }}),
                        add(new AttachedDisk() {{
                            architecture = AttachedDiskArchitectureEnum.X8664;
                            autoDelete = false;
                            boot = false;
                            deviceName = "incidunt";
                            diskEncryptionKey = new CustomerEncryptionKey() {{
                                kmsKeyName = "laborum";
                                kmsKeyServiceAccount = "culpa";
                                rawKey = "magnam";
                                rsaEncryptedKey = "similique";
                                sha256 = "veniam";
                            }};
                            diskSizeGb = "sit";
                            forceAttach = false;
                            guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                }}),
                                add(new GuestOsFeature() {{
                                    type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                                }}),
                            }};
                            index = 523187;
                            initializeParams = new AttachedDiskInitializeParams() {{
                                architecture = AttachedDiskInitializeParamsArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                                description = "optio";
                                diskName = "sed";
                                diskSizeGb = "excepturi";
                                diskType = "animi";
                                guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                    add(new GuestOsFeature() {{
                                        type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                                    }}),
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("beatae", "quidem");
                                    put("assumenda", "repellendus");
                                }};
                                licenses = new String[]{{
                                    add("mollitia"),
                                    add("ipsum"),
                                    add("quae"),
                                }};
                                multiWriter = false;
                                onUpdateAction = AttachedDiskInitializeParamsOnUpdateActionEnum.USE_EXISTING_DISK;
                                provisionedIops = "odio";
                                provisionedThroughput = "cum";
                                replicaZones = new String[]{{
                                    add("beatae"),
                                    add("labore"),
                                    add("modi"),
                                }};
                                resourceManagerTags = new java.util.HashMap<String, String>() {{
                                    put("officia", "saepe");
                                    put("suscipit", "unde");
                                    put("cumque", "perferendis");
                                }};
                                resourcePolicies = new String[]{{
                                    add("totam"),
                                    add("fugiat"),
                                    add("labore"),
                                }};
                                sourceImage = "vitae";
                                sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "deleniti";
                                    kmsKeyServiceAccount = "tempore";
                                    rawKey = "libero";
                                    rsaEncryptedKey = "quam";
                                    sha256 = "dicta";
                                }};
                                sourceSnapshot = "totam";
                                sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                                    kmsKeyName = "accusantium";
                                    kmsKeyServiceAccount = "ut";
                                    rawKey = "repellat";
                                    rsaEncryptedKey = "modi";
                                    sha256 = "dolores";
                                }};
                            }};
                            interface_ = AttachedDiskInterfaceEnum.NVME;
                            kind = "pariatur";
                            licenses = new String[]{{
                                add("tempora"),
                                add("adipisci"),
                            }};
                            locked = false;
                            mode = AttachedDiskModeEnum.READ_WRITE;
                            shieldedInstanceInitialState = new InitialStateConfig() {{
                                dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "quis";
                                        fileType = FileContentBufferFileTypeEnum.X509;
                                    }}),
                                }};
                                dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "in";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                                    add(new FileContentBuffer() {{
                                        content = "quisquam";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "impedit";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                    add(new FileContentBuffer() {{
                                        content = "nam";
                                        fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                    }}),
                                }};
                                pk = new FileContentBuffer() {{
                                    content = "officiis";
                                    fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                                }};
                            }};
                            source = "velit";
                            type = AttachedDiskTypeEnum.SCRATCH;
                            userLicenses = new String[]{{
                                add("id"),
                                add("sequi"),
                            }};
                        }}),
                    }};
                    displayDevice = new DisplayDevice() {{
                        enableDisplay = false;
                    }};;
                    eraseWindowsVssSignature = false;
                    fingerprint = "optio";
                    guestAccelerators = new org.openapis.openapi.models.shared.AcceleratorConfig[]{{
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 146304;
                            acceleratorType = "amet";
                        }}),
                        add(new AcceleratorConfig() {{
                            acceleratorCount = 94031;
                            acceleratorType = "doloremque";
                        }}),
                    }};
                    hostname = "glossy-trick.info";
                    id = "impedit";
                    instanceEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "dolor";
                        kmsKeyServiceAccount = "quaerat";
                        rawKey = "impedit";
                        rsaEncryptedKey = "deserunt";
                        sha256 = "distinctio";
                    }};;
                    keyRevocationActionType = InstanceKeyRevocationActionTypeEnum.KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                    kind = "voluptates";
                    labelFingerprint = "optio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "beatae");
                        put("explicabo", "est");
                        put("laboriosam", "ea");
                    }};
                    lastStartTimestamp = "beatae";
                    lastStopTimestamp = "eius";
                    lastSuspendedTimestamp = "atque";
                    machineType = "unde";
                    metadata = new Metadata() {{
                        fingerprint = "ut";
                        items = new org.openapis.openapi.models.shared.MetadataItems[]{{
                            add(new MetadataItems() {{
                                key = "fuga";
                                value = "voluptatum";
                            }}),
                            add(new MetadataItems() {{
                                key = "recusandae";
                                value = "sint";
                            }}),
                        }};
                        kind = "doloremque";
                    }};;
                    minCpuPlatform = "voluptatum";
                    name = "Jennifer Koss";
                    networkInterfaces = new org.openapis.openapi.models.shared.NetworkInterface[]{{
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "exercitationem";
                                    externalIpv6PrefixLength = 210391;
                                    kind = "praesentium";
                                    name = "Yvonne Dibbert";
                                    natIP = "nesciunt";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "nobis";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "modi";
                                    subnetworkRangeName = "itaque";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "autem";
                                    subnetworkRangeName = "autem";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "earum";
                                    subnetworkRangeName = "culpa";
                                }}),
                            }};
                            fingerprint = "tempora";
                            internalIpv6PrefixLength = 468540;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
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
                                add(new AccessConfig() {{
                                    externalIpv6 = "ab";
                                    externalIpv6PrefixLength = 535167;
                                    kind = "maiores";
                                    name = "Gene Klein";
                                    natIP = "eum";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "quia";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "veniam";
                            kind = "dolorem";
                            name = "Geneva Predovic";
                            network = "minima";
                            networkAttachment = "assumenda";
                            networkIP = "aperiam";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            queueCount = 324028;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "aliquid";
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "eligendi";
                                    externalIpv6PrefixLength = 550576;
                                    kind = "cum";
                                    name = "Rodney Pagac";
                                    natIP = "similique";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "mollitia";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "quo";
                                    subnetworkRangeName = "vitae";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "modi";
                                    subnetworkRangeName = "labore";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "consequuntur";
                                    subnetworkRangeName = "voluptatem";
                                }}),
                            }};
                            fingerprint = "aut";
                            internalIpv6PrefixLength = 761594;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "maxime";
                                    externalIpv6PrefixLength = 645074;
                                    kind = "repudiandae";
                                    name = "Harold Murphy DVM";
                                    natIP = "impedit";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "laudantium";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "eius";
                            kind = "cupiditate";
                            name = "Lucy Pfeffer";
                            network = "ducimus";
                            networkAttachment = "id";
                            networkIP = "accusantium";
                            nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            queueCount = 644627;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "expedita";
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "deserunt";
                                    externalIpv6PrefixLength = 596791;
                                    kind = "voluptates";
                                    name = "Floyd Price";
                                    natIP = "praesentium";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "maxime";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "fuga";
                                    externalIpv6PrefixLength = 232853;
                                    kind = "vel";
                                    name = "Sara Kuhic";
                                    natIP = "iure";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "necessitatibus";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "autem";
                                    subnetworkRangeName = "earum";
                                }}),
                                add(new AliasIpRange() {{
                                    ipCidrRange = "sint";
                                    subnetworkRangeName = "nihil";
                                }}),
                            }};
                            fingerprint = "voluptates";
                            internalIpv6PrefixLength = 36715;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "eius";
                                    externalIpv6PrefixLength = 107835;
                                    kind = "aut";
                                    name = "Robin Haag";
                                    natIP = "molestiae";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "asperiores";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "odit";
                                    externalIpv6PrefixLength = 285032;
                                    kind = "cupiditate";
                                    name = "Evelyn Gutkowski";
                                    natIP = "animi";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD;
                                    publicPtrDomainName = "excepturi";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.EXTERNAL;
                            ipv6Address = "perspiciatis";
                            kind = "laborum";
                            name = "Candace Wilkinson";
                            network = "nisi";
                            networkAttachment = "aliquid";
                            networkIP = "ex";
                            nicType = NetworkInterfaceNicTypeEnum.GVNIC;
                            queueCount = 881052;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                            subnetwork = "mollitia";
                        }}),
                        add(new NetworkInterface() {{
                            accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "rerum";
                                    externalIpv6PrefixLength = 957109;
                                    kind = "dolores";
                                    name = "Santos Boyer";
                                    natIP = "praesentium";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "beatae";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "velit";
                                    externalIpv6PrefixLength = 362786;
                                    kind = "magni";
                                    name = "Lowell Schroeder";
                                    natIP = "dolorum";
                                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                                    publicPtrDomainName = "minus";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.DIRECT_IPV6;
                                }}),
                            }};
                            aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                                add(new AliasIpRange() {{
                                    ipCidrRange = "qui";
                                    subnetworkRangeName = "reprehenderit";
                                }}),
                            }};
                            fingerprint = "atque";
                            internalIpv6PrefixLength = 103010;
                            ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                                add(new AccessConfig() {{
                                    externalIpv6 = "recusandae";
                                    externalIpv6PrefixLength = 784985;
                                    kind = "fuga";
                                    name = "Alice Kautzer";
                                    natIP = "aliquam";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "repudiandae";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                                add(new AccessConfig() {{
                                    externalIpv6 = "quae";
                                    externalIpv6PrefixLength = 231063;
                                    kind = "quaerat";
                                    name = "Mr. Hope Hackett";
                                    natIP = "similique";
                                    networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                                    publicPtrDomainName = "veniam";
                                    setPublicPtr = false;
                                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                                }}),
                            }};
                            ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                            ipv6Address = "iusto";
                            kind = "quasi";
                            name = "Rogelio Hansen";
                            network = "dicta";
                            networkAttachment = "architecto";
                            networkIP = "fugiat";
                            nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                            queueCount = 111045;
                            stackType = NetworkInterfaceStackTypeEnum.IPV4_IPV6;
                            subnetwork = "deserunt";
                        }}),
                    }};
                    networkPerformanceConfig = new NetworkPerformanceConfig() {{
                        totalEgressBandwidthTier = NetworkPerformanceConfigTotalEgressBandwidthTierEnum.DEFAULT_;
                    }};;
                    params = new InstanceParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("dicta", "in");
                        }};
                    }};;
                    postKeyRevocationActionType = InstancePostKeyRevocationActionTypeEnum.POST_KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED;
                    privateIpv6GoogleAccess = InstancePrivateIpv6GoogleAccessEnum.ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
                    reservationAffinity = new ReservationAffinity() {{
                        consumeReservationType = ReservationAffinityConsumeReservationTypeEnum.ANY_RESERVATION;
                        key = "repudiandae";
                        values = new String[]{{
                            add("ut"),
                            add("totam"),
                            add("laboriosam"),
                        }};
                    }};;
                    resourcePolicies = new String[]{{
                        add("nesciunt"),
                        add("vero"),
                    }};
                    resourceStatus = new ResourceStatus() {{
                        physicalHost = "nostrum";
                        scheduling = new ResourceStatusScheduling() {{
                            terminationTimestamp = "qui";
                        }};;
                    }};;
                    satisfiesPzs = false;
                    scheduling = new Scheduling() {{
                        automaticRestart = false;
                        hostErrorTimeoutSeconds = 125811;
                        instanceTerminationAction = SchedulingInstanceTerminationActionEnum.STOP;
                        locationHint = "corrupti";
                        maintenanceFreezeDurationHours = 185161;
                        maintenanceInterval = SchedulingMaintenanceIntervalEnum.PERIODIC;
                        maxRunDuration = new Duration() {{
                            nanos = 559232;
                            seconds = "similique";
                        }};;
                        minNodeCpus = 623373;
                        nodeAffinities = new org.openapis.openapi.models.shared.SchedulingNodeAffinity[]{{
                            add(new SchedulingNodeAffinity() {{
                                key = "amet";
                                operator = SchedulingNodeAffinityOperatorEnum.IN;
                                values = new String[]{{
                                    add("commodi"),
                                    add("doloremque"),
                                }};
                            }}),
                        }};
                        onHostMaintenance = SchedulingOnHostMaintenanceEnum.TERMINATE;
                        preemptible = false;
                        provisioningModel = SchedulingProvisioningModelEnum.SPOT;
                        terminationTime = "fugit";
                    }};;
                    selfLink = "quaerat";
                    serviceAccounts = new org.openapis.openapi.models.shared.ServiceAccount[]{{
                        add(new ServiceAccount() {{
                            email = "Kieran75@yahoo.com";
                            scopes = new String[]{{
                                add("ex"),
                                add("dolore"),
                                add("eligendi"),
                                add("magni"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Clementine14@hotmail.com";
                            scopes = new String[]{{
                                add("labore"),
                                add("voluptatum"),
                                add("deleniti"),
                                add("mollitia"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Sofia96@hotmail.com";
                            scopes = new String[]{{
                                add("est"),
                                add("dolorum"),
                            }};
                        }}),
                        add(new ServiceAccount() {{
                            email = "Faye.MacGyver@gmail.com";
                            scopes = new String[]{{
                                add("eveniet"),
                                add("eos"),
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
                    shieldedVmConfig = new ShieldedVmConfig() {{
                        enableIntegrityMonitoring = false;
                        enableSecureBoot = false;
                        enableVtpm = false;
                    }};;
                    shieldedVmIntegrityPolicy = new ShieldedVmIntegrityPolicy() {{
                        updateAutoLearnPolicy = false;
                    }};;
                    sourceMachineImage = "aperiam";
                    sourceMachineImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "deleniti";
                        kmsKeyServiceAccount = "amet";
                        rawKey = "aut";
                        rsaEncryptedKey = "quasi";
                        sha256 = "laboriosam";
                    }};;
                    startRestricted = false;
                    status = InstanceStatusEnum.SUSPENDING;
                    statusMessage = "fuga";
                    tags = new Tags() {{
                        fingerprint = "ratione";
                        items = new String[]{{
                            add("soluta"),
                            add("libero"),
                        }};
                    }};;
                    zone = "molestias";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "repellat";
                key = "eum";
                minimalAction = ComputeInstancesUpdateMinimalActionEnum.INVALID;
                mostDisruptiveAllowedAction = ComputeInstancesUpdateMostDisruptiveAllowedActionEnum.INVALID;
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "iusto";
                requestId = "culpa";
                uploadType = "ea";
                uploadProtocol = "accusantium";
                userIp = "esse";
            }};            

            ComputeInstancesUpdateResponse res = sdk.instances.computeInstancesUpdate(req, new ComputeInstancesUpdateSecurity() {{
                option1 = new ComputeInstancesUpdateSecurityOption1("facere", "architecto") {{
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

            ComputeInstancesUpdateAccessConfigRequest req = new ComputeInstancesUpdateAccessConfigRequest("voluptas", "voluptatem", "aliquid", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessConfig = new AccessConfig() {{
                    externalIpv6 = "quaerat";
                    externalIpv6PrefixLength = 342095;
                    kind = "beatae";
                    name = "Blanca Doyle";
                    natIP = "cupiditate";
                    networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                    publicPtrDomainName = "similique";
                    setPublicPtr = false;
                    type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "quidem";
                key = "at";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "vero";
                uploadType = "quos";
                uploadProtocol = "in";
                userIp = "laudantium";
            }};            

            ComputeInstancesUpdateAccessConfigResponse res = sdk.instances.computeInstancesUpdateAccessConfig(req, new ComputeInstancesUpdateAccessConfigSecurity() {{
                option1 = new ComputeInstancesUpdateAccessConfigSecurityOption1("molestiae", "voluptatem") {{
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

            ComputeInstancesUpdateDisplayDeviceRequest req = new ComputeInstancesUpdateDisplayDeviceRequest("neque", "magnam", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                displayDevice = new DisplayDevice() {{
                    enableDisplay = false;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "est";
                key = "mollitia";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "ex";
                uploadType = "minima";
                uploadProtocol = "mollitia";
                userIp = "sequi";
            }};            

            ComputeInstancesUpdateDisplayDeviceResponse res = sdk.instances.computeInstancesUpdateDisplayDevice(req, new ComputeInstancesUpdateDisplayDeviceSecurity() {{
                option1 = new ComputeInstancesUpdateDisplayDeviceSecurityOption1("eos", "laudantium") {{
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

            ComputeInstancesUpdateNetworkInterfaceRequest req = new ComputeInstancesUpdateNetworkInterfaceRequest("adipisci", "fugit", "iusto", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                networkInterface1 = new NetworkInterface() {{
                    accessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "beatae";
                            externalIpv6PrefixLength = 624312;
                            kind = "quibusdam";
                            name = "Sheri Torp";
                            natIP = "reprehenderit";
                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                            publicPtrDomainName = "facere";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "suscipit";
                            externalIpv6PrefixLength = 929821;
                            kind = "nesciunt";
                            name = "Jimmy Hayes";
                            natIP = "perspiciatis";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD;
                            publicPtrDomainName = "adipisci";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                    }};
                    aliasIpRanges = new org.openapis.openapi.models.shared.AliasIpRange[]{{
                        add(new AliasIpRange() {{
                            ipCidrRange = "nemo";
                            subnetworkRangeName = "iusto";
                        }}),
                    }};
                    fingerprint = "iusto";
                    internalIpv6PrefixLength = 559970;
                    ipv6AccessConfigs = new org.openapis.openapi.models.shared.AccessConfig[]{{
                        add(new AccessConfig() {{
                            externalIpv6 = "necessitatibus";
                            externalIpv6PrefixLength = 325517;
                            kind = "numquam";
                            name = "Alfonso Sawayn PhD";
                            natIP = "ratione";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            publicPtrDomainName = "mollitia";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "ducimus";
                            externalIpv6PrefixLength = 326482;
                            kind = "voluptatem";
                            name = "Stacy Pfeffer";
                            natIP = "asperiores";
                            networkTier = AccessConfigNetworkTierEnum.PREMIUM;
                            publicPtrDomainName = "neque";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "sed";
                            externalIpv6PrefixLength = 94986;
                            kind = "nemo";
                            name = "Brandy Johns";
                            natIP = "corporis";
                            networkTier = AccessConfigNetworkTierEnum.STANDARD_OVERRIDES_FIXED_STANDARD;
                            publicPtrDomainName = "amet";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.ONE_TO_ONE_NAT;
                        }}),
                        add(new AccessConfig() {{
                            externalIpv6 = "alias";
                            externalIpv6PrefixLength = 179463;
                            kind = "qui";
                            name = "Alice Goodwin II";
                            natIP = "assumenda";
                            networkTier = AccessConfigNetworkTierEnum.FIXED_STANDARD;
                            publicPtrDomainName = "nostrum";
                            setPublicPtr = false;
                            type = AccessConfigTypeEnum.DIRECT_IPV6;
                        }}),
                    }};
                    ipv6AccessType = NetworkInterfaceIpv6AccessTypeEnum.INTERNAL;
                    ipv6Address = "magni";
                    kind = "sint";
                    name = "Miss Cornelius Hodkiewicz";
                    network = "quo";
                    networkAttachment = "in";
                    networkIP = "veritatis";
                    nicType = NetworkInterfaceNicTypeEnum.UNSPECIFIED_NIC_TYPE;
                    queueCount = 382479;
                    stackType = NetworkInterfaceStackTypeEnum.IPV4_ONLY;
                    subnetwork = "voluptatibus";
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "esse";
                key = "fuga";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "possimus";
                uploadType = "delectus";
                uploadProtocol = "labore";
                userIp = "accusantium";
            }};            

            ComputeInstancesUpdateNetworkInterfaceResponse res = sdk.instances.computeInstancesUpdateNetworkInterface(req, new ComputeInstancesUpdateNetworkInterfaceSecurity() {{
                option1 = new ComputeInstancesUpdateNetworkInterfaceSecurityOption1("quo", "id") {{
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

            ComputeInstancesUpdateShieldedInstanceConfigRequest req = new ComputeInstancesUpdateShieldedInstanceConfigRequest("alias", "at", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                shieldedInstanceConfig = new ShieldedInstanceConfig() {{
                    enableIntegrityMonitoring = false;
                    enableSecureBoot = false;
                    enableVtpm = false;
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "quae";
                key = "ex";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "distinctio";
                uploadType = "facilis";
                uploadProtocol = "maiores";
                userIp = "aut";
            }};            

            ComputeInstancesUpdateShieldedInstanceConfigResponse res = sdk.instances.computeInstancesUpdateShieldedInstanceConfig(req, new ComputeInstancesUpdateShieldedInstanceConfigSecurity() {{
                option1 = new ComputeInstancesUpdateShieldedInstanceConfigSecurityOption1("nostrum", "veniam") {{
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

            ComputeInstancesUpdateShieldedVmConfigRequest req = new ComputeInstancesUpdateShieldedVmConfigRequest("fugit", "ducimus", "et") {{
                dollarXgafv = XgafvEnum.TWO;
                shieldedVmConfig = new ShieldedVmConfig() {{
                    enableIntegrityMonitoring = false;
                    enableSecureBoot = false;
                    enableVtpm = false;
                }};;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "vitae";
                fields = "architecto";
                key = "repellendus";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "consequatur";
                uploadType = "aliquid";
                uploadProtocol = "at";
                userIp = "quibusdam";
            }};            

            ComputeInstancesUpdateShieldedVmConfigResponse res = sdk.instances.computeInstancesUpdateShieldedVmConfig(req, new ComputeInstancesUpdateShieldedVmConfigSecurity() {{
                option1 = new ComputeInstancesUpdateShieldedVmConfigSecurityOption1("beatae", "soluta") {{
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
