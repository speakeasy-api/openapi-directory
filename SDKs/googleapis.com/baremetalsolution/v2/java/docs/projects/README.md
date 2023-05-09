# projects

### Available Operations

* [baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch](#baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch) - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* [baremetalsolutionProjectsLocationsInstancesCreate](#baremetalsolutionprojectslocationsinstancescreate) - Create an Instance.
* [baremetalsolutionProjectsLocationsInstancesDetachLun](#baremetalsolutionprojectslocationsinstancesdetachlun) - Detach LUN from Instance.
* [baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole) - Disable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole) - Enable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesList](#baremetalsolutionprojectslocationsinstanceslist) - List servers in a given project and location.
* [baremetalsolutionProjectsLocationsInstancesReset](#baremetalsolutionprojectslocationsinstancesreset) - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* [baremetalsolutionProjectsLocationsInstancesStart](#baremetalsolutionprojectslocationsinstancesstart) - Starts a server that was shutdown.
* [baremetalsolutionProjectsLocationsInstancesStop](#baremetalsolutionprojectslocationsinstancesstop) - Stop a running server.
* [baremetalsolutionProjectsLocationsList](#baremetalsolutionprojectslocationslist) - Lists information about the supported locations for this service.
* [baremetalsolutionProjectsLocationsNetworksList](#baremetalsolutionprojectslocationsnetworkslist) - List network in a given project and location.
* [baremetalsolutionProjectsLocationsNetworksListNetworkUsage](#baremetalsolutionprojectslocationsnetworkslistnetworkusage) - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* [baremetalsolutionProjectsLocationsNfsSharesCreate](#baremetalsolutionprojectslocationsnfssharescreate) - Create an NFS share.
* [baremetalsolutionProjectsLocationsNfsSharesList](#baremetalsolutionprojectslocationsnfsshareslist) - List NFS shares.
* [baremetalsolutionProjectsLocationsProvisioningConfigsCreate](#baremetalsolutionprojectslocationsprovisioningconfigscreate) - Create new ProvisioningConfig.
* [baremetalsolutionProjectsLocationsProvisioningConfigsSubmit](#baremetalsolutionprojectslocationsprovisioningconfigssubmit) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsLocationsProvisioningQuotasList](#baremetalsolutionprojectslocationsprovisioningquotaslist) - List the budget details to provision resources on a given project.
* [baremetalsolutionProjectsLocationsSshKeysCreate](#baremetalsolutionprojectslocationssshkeyscreate) - Register a public SSH key in the specified project for use with the interactive serial console feature.
* [baremetalsolutionProjectsLocationsSshKeysList](#baremetalsolutionprojectslocationssshkeyslist) - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* [baremetalsolutionProjectsLocationsVolumesList](#baremetalsolutionprojectslocationsvolumeslist) - List storage volumes in a given project and location.
* [baremetalsolutionProjectsLocationsVolumesLunsEvict](#baremetalsolutionprojectslocationsvolumeslunsevict) - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* [baremetalsolutionProjectsLocationsVolumesLunsList](#baremetalsolutionprojectslocationsvolumeslunslist) - List storage volume luns for given storage volume.
* [baremetalsolutionProjectsLocationsVolumesPatch](#baremetalsolutionprojectslocationsvolumespatch) - Update details of a single storage volume.
* [baremetalsolutionProjectsLocationsVolumesRename](#baremetalsolutionprojectslocationsvolumesrename) - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* [baremetalsolutionProjectsLocationsVolumesResize](#baremetalsolutionprojectslocationsvolumesresize) - Emergency Volume resize.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsCreate](#baremetalsolutionprojectslocationsvolumessnapshotscreate) - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsDelete](#baremetalsolutionprojectslocationsvolumessnapshotsdelete) - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsGet](#baremetalsolutionprojectslocationsvolumessnapshotsget) - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsList](#baremetalsolutionprojectslocationsvolumessnapshotslist) - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot](#baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot) - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

## baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch

Get instance provisioning settings for a given project. This is hidden method used by UI only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest req = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req, new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchInstanceProvisioningSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsInstancesCreate

Create an Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceWorkloadProfileEnum;
import org.openapis.openapi.models.shared.LogicalNetworkInterface;
import org.openapis.openapi.models.shared.LogicalNetworkInterfaceNetworkTypeEnum;
import org.openapis.openapi.models.shared.LunInput;
import org.openapis.openapi.models.shared.LunMultiprotocolTypeEnum;
import org.openapis.openapi.models.shared.LunStateEnum;
import org.openapis.openapi.models.shared.LunStorageTypeEnum;
import org.openapis.openapi.models.shared.SnapshotReservationDetail;
import org.openapis.openapi.models.shared.VolumeInput;
import org.openapis.openapi.models.shared.VolumePerformanceTierEnum;
import org.openapis.openapi.models.shared.VolumeSnapshotAutoDeleteBehaviorEnum;
import org.openapis.openapi.models.shared.VolumeStateEnum;
import org.openapis.openapi.models.shared.VolumeStorageTypeEnum;
import org.openapis.openapi.models.shared.VolumeWorkloadProfileEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesCreateRequest req = new BaremetalsolutionProjectsLocationsInstancesCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    hyperthreadingEnabled = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quis", "veritatis");
                    }};
                    logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                        add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                            interfaceIndex = 20218;
                            logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7";
                                    ipAddress = "ipsum";
                                    network = "excepturi";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "05929396-fea7-4596-ab10-faaa2352c595";
                                    ipAddress = "minima";
                                    network = "excepturi";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                            }};
                            name = "Cecilia Yundt MD";
                        }}),
                        add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                            interfaceIndex = 208876;
                            logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "2fa94677-3925-41aa-92c3-f5ad019da1ff";
                                    ipAddress = "vero";
                                    network = "nihil";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "f097b007-4f15-4471-b5e6-e13b99d488e1";
                                    ipAddress = "repudiandae";
                                    network = "sint";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "e450ad2a-bd44-4269-802d-502a94bb4f63";
                                    ipAddress = "eligendi";
                                    network = "sint";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                }}),
                            }};
                            name = "Terence Marquardt";
                        }}),
                        add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                            interfaceIndex = 891555;
                            logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669";
                                    ipAddress = "omnis";
                                    network = "molestiae";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "74ba4469-b6e2-4141-9598-90afa563e251";
                                    ipAddress = "iure";
                                    network = "doloribus";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "4c8b711e-5b7f-4d2e-9028-921cddc69260";
                                    ipAddress = "ab";
                                    network = "maiores";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                }}),
                                add(new LogicalNetworkInterface() {{
                                    defaultGateway = false;
                                    id = "576b0d5f-0d30-4c5f-bb25-87053202c73d";
                                    ipAddress = "nostrum";
                                    network = "hic";
                                    networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                }}),
                            }};
                            name = "Miss Cesar Metz";
                        }}),
                    }};
                    luns = new org.openapis.openapi.models.shared.LunInput[]{{
                        add(new LunInput() {{
                            bootLun = false;
                            id = "909b3fe4-9a8d-49cb-b486-33323f9b77f3";
                            multiprotocolType = LunMultiprotocolTypeEnum.LINUX;
                            shareable = false;
                            sizeGb = "numquam";
                            state = LunStateEnum.STATE_UNSPECIFIED;
                            storageType = LunStorageTypeEnum.STORAGE_TYPE_UNSPECIFIED;
                            storageVolume = "ipsa";
                            wwid = "iure";
                        }}),
                        add(new LunInput() {{
                            bootLun = false;
                            id = "74ebf692-80d1-4ba7-ba89-ebf737ae4203";
                            multiprotocolType = LunMultiprotocolTypeEnum.LINUX;
                            shareable = false;
                            sizeGb = "accusamus";
                            state = LunStateEnum.CREATING;
                            storageType = LunStorageTypeEnum.HDD;
                            storageVolume = "suscipit";
                            wwid = "deserunt";
                        }}),
                        add(new LunInput() {{
                            bootLun = false;
                            id = "95d8a0d4-46ce-42af-ba73-cf3be453f870";
                            multiprotocolType = LunMultiprotocolTypeEnum.LINUX;
                            shareable = false;
                            sizeGb = "neque";
                            state = LunStateEnum.STATE_UNSPECIFIED;
                            storageType = LunStorageTypeEnum.SSD;
                            storageVolume = "libero";
                            wwid = "voluptas";
                        }}),
                    }};
                    machineType = "deserunt";
                    name = "Tracy Gottlieb";
                    networkTemplate = "maxime";
                    osImage = "pariatur";
                    pod = "soluta";
                    volumes = new org.openapis.openapi.models.shared.VolumeInput[]{{
                        add(new VolumeInput() {{
                            autoGrownSizeGib = "laborum";
                            currentSizeGib = "totam";
                            emergencySizeGib = "incidunt";
                            id = "22bb679d-2322-4715-bf0c-bb1e31b8b90f";
                            labels = new java.util.HashMap<String, String>() {{
                                put("dolore", "labore");
                            }};
                            maxSizeGib = "adipisci";
                            notes = "dolorum";
                            originallyRequestedSizeGib = "architecto";
                            performanceTier = VolumePerformanceTierEnum.VOLUME_PERFORMANCE_TIER_UNSPECIFIED;
                            pod = "aut";
                            remainingSpaceGib = "quas";
                            requestedSizeGib = "itaque";
                            snapshotAutoDeleteBehavior = VolumeSnapshotAutoDeleteBehaviorEnum.SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED;
                            snapshotEnabled = false;
                            snapshotReservationDetail = new SnapshotReservationDetail() {{
                                reservedSpaceGib = "est";
                                reservedSpacePercent = 833038;
                                reservedSpaceRemainingGib = "porro";
                                reservedSpaceUsedPercent = 984330;
                            }};
                            snapshotSchedulePolicy = "ut";
                            state = VolumeStateEnum.UPDATING;
                            storageAggregatePool = "cupiditate";
                            storageType = VolumeStorageTypeEnum.STORAGE_TYPE_UNSPECIFIED;
                            workloadProfile = VolumeWorkloadProfileEnum.WORKLOAD_PROFILE_UNSPECIFIED;
                        }}),
                    }};
                    workloadProfile = InstanceWorkloadProfileEnum.WORKLOAD_PROFILE_GENERIC;
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quisquam";
                key = "vero";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "ipsum";
                uploadProtocol = "delectus";
            }};            

            BaremetalsolutionProjectsLocationsInstancesCreateResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesCreate(req, new BaremetalsolutionProjectsLocationsInstancesCreateSecurity("voluptate", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesDetachLun

Detach LUN from Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DetachLunRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesDetachLunRequest req = new BaremetalsolutionProjectsLocationsInstancesDetachLunRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                detachLunRequest = new DetachLunRequest() {{
                    lun = "dignissimos";
                    skipReboot = false;
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "odio";
                key = "similique";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "ducimus";
                uploadProtocol = "dolore";
            }};            

            BaremetalsolutionProjectsLocationsInstancesDetachLunResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesDetachLun(req, new BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity("quibusdam", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole

Disable the interactive serial console feature on an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest req = new BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aut", "voluptatibus");
                    put("exercitationem", "nulla");
                    put("fugit", "porro");
                    put("maiores", "doloribus");
                }};
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "alias";
                key = "officia";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "ea";
                uploadProtocol = "aspernatur";
            }};            

            BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole(req, new BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity("vel", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole

Enable the interactive serial console feature on an instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest req = new BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laudantium", "dicta");
                    put("dolor", "maiores");
                }};
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quisquam";
                uploadProtocol = "saepe";
            }};            

            BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole(req, new BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity("ea", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesList

List servers in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesListRequest req = new BaremetalsolutionProjectsLocationsInstancesListRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "ea";
                filter = "quo";
                key = "consectetur";
                oauthToken = "recusandae";
                pageSize = 132487L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "a";
                uploadProtocol = "libero";
            }};            

            BaremetalsolutionProjectsLocationsInstancesListResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesList(req, new BaremetalsolutionProjectsLocationsInstancesListSecurity("aut", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsInstancesReset

Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesResetRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesResetResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesResetRequest req = new BaremetalsolutionProjectsLocationsInstancesResetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("fugit", "accusamus");
                    put("inventore", "non");
                }};
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "placeat";
                key = "velit";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nobis";
                uploadProtocol = "quas";
            }};            

            BaremetalsolutionProjectsLocationsInstancesResetResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesReset(req, new BaremetalsolutionProjectsLocationsInstancesResetSecurity("assumenda", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesStart

Starts a server that was shutdown.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStartRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStartResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesStartRequest req = new BaremetalsolutionProjectsLocationsInstancesStartRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("tempora", "numquam");
                }};
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "molestiae";
                key = "magnam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "esse";
                uploadProtocol = "esse";
            }};            

            BaremetalsolutionProjectsLocationsInstancesStartResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesStart(req, new BaremetalsolutionProjectsLocationsInstancesStartSecurity("rem", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsInstancesStop

Stop a running server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStopRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStopResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstancesStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsInstancesStopRequest req = new BaremetalsolutionProjectsLocationsInstancesStopRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ut", "eum");
                    put("suscipit", "assumenda");
                    put("eos", "praesentium");
                    put("quisquam", "veritatis");
                }};
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "neque";
                key = "quo";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "fuga";
                uploadProtocol = "eius";
            }};            

            BaremetalsolutionProjectsLocationsInstancesStopResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstancesStop(req, new BaremetalsolutionProjectsLocationsInstancesStopSecurity("eos", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsListRequest req = new BaremetalsolutionProjectsLocationsListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsam";
                filter = "aspernatur";
                key = "sequi";
                oauthToken = "quo";
                pageSize = 459856L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "distinctio";
                uploadProtocol = "quod";
            }};            

            BaremetalsolutionProjectsLocationsListResponse res = sdk.projects.baremetalsolutionProjectsLocationsList(req, new BaremetalsolutionProjectsLocationsListSecurity("dignissimos", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsNetworksList

List network in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsNetworksListRequest req = new BaremetalsolutionProjectsLocationsNetworksListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                filter = "commodi";
                key = "sapiente";
                oauthToken = "dolores";
                pageSize = 645570L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "porro";
                uploadProtocol = "eum";
            }};            

            BaremetalsolutionProjectsLocationsNetworksListResponse res = sdk.projects.baremetalsolutionProjectsLocationsNetworksList(req, new BaremetalsolutionProjectsLocationsNetworksListSecurity("quas", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsNetworksListNetworkUsage

List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest req = new BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "incidunt";
                key = "atque";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "nisi";
                uploadProtocol = "fugit";
            }};            

            BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse res = sdk.projects.baremetalsolutionProjectsLocationsNetworksListNetworkUsage(req, new BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity("sapiente", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNetworkUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsNfsSharesCreate

Create an NFS share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity;
import org.openapis.openapi.models.shared.AllowedClientInput;
import org.openapis.openapi.models.shared.AllowedClientMountPermissionsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NfsShareInput;
import org.openapis.openapi.models.shared.NfsShareStorageTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsNfsSharesCreateRequest req = new BaremetalsolutionProjectsLocationsNfsSharesCreateRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                nfsShareInput = new NfsShareInput() {{
                    allowedClients = new org.openapis.openapi.models.shared.AllowedClientInput[]{{
                        add(new AllowedClientInput() {{
                            allowDev = false;
                            allowSuid = false;
                            allowedClientsCidr = "occaecati";
                            mountPermissions = AllowedClientMountPermissionsEnum.READ;
                            network = "et";
                            noRootSquash = false;
                        }}),
                        add(new AllowedClientInput() {{
                            allowDev = false;
                            allowSuid = false;
                            allowedClientsCidr = "esse";
                            mountPermissions = AllowedClientMountPermissionsEnum.READ_WRITE;
                            network = "accusamus";
                            noRootSquash = false;
                        }}),
                        add(new AllowedClientInput() {{
                            allowDev = false;
                            allowSuid = false;
                            allowedClientsCidr = "veritatis";
                            mountPermissions = AllowedClientMountPermissionsEnum.READ;
                            network = "quod";
                            noRootSquash = false;
                        }}),
                        add(new AllowedClientInput() {{
                            allowDev = false;
                            allowSuid = false;
                            allowedClientsCidr = "nam";
                            mountPermissions = AllowedClientMountPermissionsEnum.READ_WRITE;
                            network = "aliquid";
                            noRootSquash = false;
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("saepe", "vel");
                    }};
                    name = "Javier Price";
                    requestedSizeGib = "distinctio";
                    storageType = NfsShareStorageTypeEnum.HDD;
                }};;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "adipisci";
                key = "cumque";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "minus";
                uploadProtocol = "quaerat";
            }};            

            BaremetalsolutionProjectsLocationsNfsSharesCreateResponse res = sdk.projects.baremetalsolutionProjectsLocationsNfsSharesCreate(req, new BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity("sapiente", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsNfsSharesList

List NFS shares.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsNfsSharesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsNfsSharesListRequest req = new BaremetalsolutionProjectsLocationsNfsSharesListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "quas";
                filter = "esse";
                key = "quasi";
                oauthToken = "a";
                pageSize = 621679L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "possimus";
                uploadProtocol = "quia";
            }};            

            BaremetalsolutionProjectsLocationsNfsSharesListResponse res = sdk.projects.baremetalsolutionProjectsLocationsNfsSharesList(req, new BaremetalsolutionProjectsLocationsNfsSharesListSecurity("eveniet", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNfsSharesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsProvisioningConfigsCreate

Create new ProvisioningConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface;
import org.openapis.openapi.models.shared.InstanceConfigInput;
import org.openapis.openapi.models.shared.InstanceConfigNetworkConfigEnum;
import org.openapis.openapi.models.shared.IntakeVlanAttachment;
import org.openapis.openapi.models.shared.LogicalNetworkInterface;
import org.openapis.openapi.models.shared.LogicalNetworkInterfaceNetworkTypeEnum;
import org.openapis.openapi.models.shared.LunRange;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.NetworkConfigBandwidthEnum;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.NetworkConfigServiceCidrEnum;
import org.openapis.openapi.models.shared.NetworkConfigTypeEnum;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.NfsExportPermissionsEnum;
import org.openapis.openapi.models.shared.ProvisioningConfigInput;
import org.openapis.openapi.models.shared.VolumeConfigInput;
import org.openapis.openapi.models.shared.VolumeConfigPerformanceTierEnum;
import org.openapis.openapi.models.shared.VolumeConfigProtocolEnum;
import org.openapis.openapi.models.shared.VolumeConfigTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest req = new BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                provisioningConfigInput = new ProvisioningConfigInput() {{
                    customId = "consequuntur";
                    email = "Logan_Nader@gmail.com";
                    handoverServiceAccount = "quae";
                    instances = new org.openapis.openapi.models.shared.InstanceConfigInput[]{{
                        add(new InstanceConfigInput() {{
                            accountNetworksEnabled = false;
                            clientNetwork = new NetworkAddress() {{
                                address = "4278 Bartoletti Freeway";
                                existingNetworkId = "sapiente";
                                networkId = "dicta";
                            }};
                            hyperthreading = false;
                            id = "5756082d-68ea-419f-9d17-051339d08086";
                            instanceType = "mollitia";
                            logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 544591;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "0394c260-71f9-43f5-b064-2dac7af515cc";
                                            ipAddress = "labore";
                                            network = "ab";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "aa63aae8-d678-464d-bb67-5fd5e60b375e";
                                            ipAddress = "facere";
                                            network = "numquam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Lela Predovic";
                                }}),
                            }};
                            networkConfig = InstanceConfigNetworkConfigEnum.NETWORKCONFIG_UNSPECIFIED;
                            networkTemplate = "sunt";
                            osImage = "asperiores";
                            privateNetwork = new NetworkAddress() {{
                                address = "22149 Feest Harbor";
                                existingNetworkId = "harum";
                                networkId = "laboriosam";
                            }};
                            userNote = "ipsa";
                        }}),
                        add(new InstanceConfigInput() {{
                            accountNetworksEnabled = false;
                            clientNetwork = new NetworkAddress() {{
                                address = "718 Goldner Courts";
                                existingNetworkId = "voluptas";
                                networkId = "voluptas";
                            }};
                            hyperthreading = false;
                            id = "55ba3c28-744e-4d53-b88f-3a8d8f5c0b2f";
                            instanceType = "explicabo";
                            logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 707918;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "b194a276-b269-416f-a1f0-8f4294e3698f";
                                            ipAddress = "tempora";
                                            network = "tempora";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "f603e8b4-45e8-40ca-95ef-d20e457e1858";
                                            ipAddress = "cum";
                                            network = "laboriosam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Evan Welch";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 204923;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "5aa8e482-4d0a-4b40-b508-8e51862065e9";
                                            ipAddress = "consequatur";
                                            network = "incidunt";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "3b1194b8-abf6-403a-b9f9-dfe0ab7da8a5";
                                            ipAddress = "voluptatem";
                                            network = "quisquam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "187f86bc-173d-4689-aee9-526f8d986e88";
                                            ipAddress = "sunt";
                                            network = "recusandae";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Dr. Leroy Wisoky Jr.";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 106429;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "563f94e2-9e97-43e9-a2a5-7a15be3e0608";
                                            ipAddress = "quae";
                                            network = "molestiae";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Karla Kerluke";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 672582;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "8845f059-7a60-4ff2-a54a-31e94764a3e8";
                                            ipAddress = "eum";
                                            network = "nemo";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "7956f925-1a5a-49da-a60f-f57bfaad4f9e";
                                            ipAddress = "sapiente";
                                            network = "cumque";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "b4512c10-3264-48dc-af61-5199ebfd0e9f";
                                            ipAddress = "debitis";
                                            network = "aliquid";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Connie Corkery";
                                }}),
                            }};
                            networkConfig = InstanceConfigNetworkConfigEnum.NETWORKCONFIG_UNSPECIFIED;
                            networkTemplate = "animi";
                            osImage = "necessitatibus";
                            privateNetwork = new NetworkAddress() {{
                                address = "000 Lila Orchard";
                                existingNetworkId = "suscipit";
                                networkId = "adipisci";
                            }};
                            userNote = "quasi";
                        }}),
                        add(new InstanceConfigInput() {{
                            accountNetworksEnabled = false;
                            clientNetwork = new NetworkAddress() {{
                                address = "98802 Jaqueline Corners";
                                existingNetworkId = "iusto";
                                networkId = "esse";
                            }};
                            hyperthreading = false;
                            id = "8ff61d01-7476-4360-a15d-b6a660659a1a";
                            instanceType = "possimus";
                            logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 653421;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "b5851d6c-645b-408b-a189-1baa0fe1ade0";
                                            ipAddress = "alias";
                                            network = "deleniti";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "6f8c5f35-0d8c-4db5-a341-814301042181";
                                            ipAddress = "dolor";
                                            network = "fugiat";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "208ece7e-253b-4668-851c-6c6e205e16de";
                                            ipAddress = "est";
                                            network = "harum";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    name = "Phil Rowe";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 455898;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "a6458427-3a84-418d-9623-09fb0929921a";
                                            ipAddress = "accusamus";
                                            network = "voluptatibus";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "9f58c4d8-6e68-4e4b-a056-013f59da757a";
                                            ipAddress = "quis";
                                            network = "sint";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "cfef66ef-1caa-4338-bc2b-eb477373c8d7";
                                            ipAddress = "odit";
                                            network = "voluptatibus";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                    }};
                                    name = "Doreen Block";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 102413;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "2c431066-1e96-4349-a1cf-9e06e3a43700";
                                            ipAddress = "consequatur";
                                            network = "officia";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "6b6bc9b8-f759-4eac-95a9-741d31135296";
                                            ipAddress = "nemo";
                                            network = "soluta";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "8a720261-1435-4e13-9dbc-2259b1abda8c";
                                            ipAddress = "sit";
                                            network = "iusto";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "e1084cb0-672d-41ad-879e-eb9665b85efb";
                                            ipAddress = "at";
                                            network = "alias";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                    }};
                                    name = "Miss Grant VonRueden";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 177005;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "782259e3-ea4b-4519-bf92-443da7ce52b8";
                                            ipAddress = "cupiditate";
                                            network = "minima";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "537c6454-efb0-4b34-896c-3ca5acfbe2fd";
                                            ipAddress = "nemo";
                                            network = "reprehenderit";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "75779291-77de-4ac6-86ec-b573409e3eb1";
                                            ipAddress = "earum";
                                            network = "veniam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "2b12eb07-f116-4db9-9545-fc95fa88970e";
                                            ipAddress = "architecto";
                                            network = "quos";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                    }};
                                    name = "Randolph Reinger DVM";
                                }}),
                            }};
                            networkConfig = InstanceConfigNetworkConfigEnum.MULTI_VLAN;
                            networkTemplate = "cum";
                            osImage = "ipsum";
                            privateNetwork = new NetworkAddress() {{
                                address = "96033 Bradtke Orchard";
                                existingNetworkId = "molestiae";
                                networkId = "eligendi";
                            }};
                            userNote = "possimus";
                        }}),
                        add(new InstanceConfigInput() {{
                            accountNetworksEnabled = false;
                            clientNetwork = new NetworkAddress() {{
                                address = "29193 Raquel Manor";
                                existingNetworkId = "odit";
                                networkId = "pariatur";
                            }};
                            hyperthreading = false;
                            id = "3513bb6f-48b6-456b-8db3-5ff2e4b27537";
                            instanceType = "est";
                            logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 753890;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "9e7319c1-77d5-425f-b7b1-14eeb52ff785";
                                            ipAddress = "repellat";
                                            network = "quisquam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "7814d4c9-8e0c-42bb-89eb-75dad636c600";
                                            ipAddress = "ad";
                                            network = "quae";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "d8bb3118-0f73-49ae-9e05-7eb809e28103";
                                            ipAddress = "dolor";
                                            network = "sunt";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "3981d4c7-00b6-407f-bc93-c73b9da3f2ce";
                                            ipAddress = "illum";
                                            network = "laborum";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                    }};
                                    name = "Clarence Feeney Sr.";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 350325;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "411faf4b-7544-4e47-ae80-2857a5b40463";
                                            ipAddress = "mollitia";
                                            network = "dignissimos";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "575f1400-e764-4ad7-b34e-c1b781b36a08";
                                            ipAddress = "aut";
                                            network = "quos";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                    }};
                                    name = "Dr. Patrick Beier";
                                }}),
                                add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                    interfaceIndex = 651228;
                                    logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "a200ef04-22eb-4216-8cf9-ab8366c723ff";
                                            ipAddress = "nulla";
                                            network = "laborum";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "e06bee48-25c1-4fc0-a115-c80bff918544";
                                            ipAddress = "itaque";
                                            network = "maxime";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "2defcce8-f197-4777-be63-562a7b408f05";
                                            ipAddress = "saepe";
                                            network = "neque";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                        add(new LogicalNetworkInterface() {{
                                            defaultGateway = false;
                                            id = "48fdaf31-3a1f-45fd-9425-9c0b36f25ea9";
                                            ipAddress = "ut";
                                            network = "numquam";
                                            networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                        }}),
                                    }};
                                    name = "Pam Kirlin";
                                }}),
                            }};
                            networkConfig = InstanceConfigNetworkConfigEnum.MULTI_VLAN;
                            networkTemplate = "ab";
                            osImage = "beatae";
                            privateNetwork = new NetworkAddress() {{
                                address = "372 Mark Glen";
                                existingNetworkId = "architecto";
                                networkId = "qui";
                            }};
                            userNote = "aliquid";
                        }}),
                    }};
                    location = "magni";
                    networks = new org.openapis.openapi.models.shared.NetworkConfigInput[]{{
                        add(new NetworkConfigInput() {{
                            bandwidth = NetworkConfigBandwidthEnum.BW1_GBPS;
                            cidr = "praesentium";
                            gcpService = "dolor";
                            id = "5bbc05a2-3a45-4cef-85fd-e10a0ce2169e";
                            jumboFramesEnabled = false;
                            serviceCidr = NetworkConfigServiceCidrEnum.DISABLED;
                            type = NetworkConfigTypeEnum.TYPE_UNSPECIFIED;
                            userNote = "accusantium";
                            vlanAttachments = new org.openapis.openapi.models.shared.IntakeVlanAttachment[]{{
                                add(new IntakeVlanAttachment() {{
                                    id = "19c6dc5e-3476-4279-9bfb-be6949fb2bb4";
                                    pairingKey = "recusandae";
                                }}),
                            }};
                            vlanSameProject = false;
                        }}),
                        add(new NetworkConfigInput() {{
                            bandwidth = NetworkConfigBandwidthEnum.BW5_GBPS;
                            cidr = "id";
                            gcpService = "saepe";
                            id = "6c3d5db3-adeb-4d5d-aea4-c506a8aa94c0";
                            jumboFramesEnabled = false;
                            serviceCidr = NetworkConfigServiceCidrEnum.SERVICE_CIDR_UNSPECIFIED;
                            type = NetworkConfigTypeEnum.CLIENT;
                            userNote = "magnam";
                            vlanAttachments = new org.openapis.openapi.models.shared.IntakeVlanAttachment[]{{
                                add(new IntakeVlanAttachment() {{
                                    id = "cf5e9d9a-4578-4adc-9ac6-00dec001ac80";
                                    pairingKey = "magni";
                                }}),
                                add(new IntakeVlanAttachment() {{
                                    id = "e2ec09ff-8f0f-4816-bf34-77c13e902c14";
                                    pairingKey = "dicta";
                                }}),
                            }};
                            vlanSameProject = false;
                        }}),
                    }};
                    statusMessage = "odit";
                    ticketId = "corporis";
                    volumes = new org.openapis.openapi.models.shared.VolumeConfigInput[]{{
                        add(new VolumeConfigInput() {{
                            gcpService = "alias";
                            id = "960a6681-51a4-472a-b923-c5949f83f350";
                            lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                add(new LunRange() {{
                                    quantity = 948444;
                                    sizeGb = 555294;
                                }}),
                                add(new LunRange() {{
                                    quantity = 476003;
                                    sizeGb = 395634;
                                }}),
                                add(new LunRange() {{
                                    quantity = 989033;
                                    sizeGb = 955466;
                                }}),
                                add(new LunRange() {{
                                    quantity = 749702;
                                    sizeGb = 598316;
                                }}),
                            }};
                            machineIds = new String[]{{
                                add("dicta"),
                            }};
                            nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "commodi";
                                    machineId = "eveniet";
                                    networkId = "porro";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_WRITE;
                                }}),
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "quidem";
                                    machineId = "modi";
                                    networkId = "voluptates";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                }}),
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "eius";
                                    machineId = "sequi";
                                    networkId = "eligendi";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_WRITE;
                                }}),
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "esse";
                                    machineId = "blanditiis";
                                    networkId = "sint";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_WRITE;
                                }}),
                            }};
                            performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_HT;
                            protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                            sizeGb = 979287;
                            snapshotsEnabled = false;
                            storageAggregatePool = "itaque";
                            type = VolumeConfigTypeEnum.DISK;
                            userNote = "deserunt";
                        }}),
                        add(new VolumeConfigInput() {{
                            gcpService = "corporis";
                            id = "3e5ae6e0-ac18-44c2-b9c2-47c88373a40e";
                            lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                add(new LunRange() {{
                                    quantity = 564627;
                                    sizeGb = 292177;
                                }}),
                            }};
                            machineIds = new String[]{{
                                add("maiores"),
                            }};
                            nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "odit";
                                    machineId = "earum";
                                    networkId = "veniam";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_ONLY;
                                }}),
                            }};
                            performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_UNSPECIFIED;
                            protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                            sizeGb = 331269;
                            snapshotsEnabled = false;
                            storageAggregatePool = "nihil";
                            type = VolumeConfigTypeEnum.TYPE_UNSPECIFIED;
                            userNote = "nisi";
                        }}),
                        add(new VolumeConfigInput() {{
                            gcpService = "tenetur";
                            id = "5d56d0bd-0af2-4dfe-93db-4f62cba3f894";
                            lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                add(new LunRange() {{
                                    quantity = 649032;
                                    sizeGb = 884361;
                                }}),
                            }};
                            machineIds = new String[]{{
                                add("cumque"),
                                add("doloremque"),
                                add("expedita"),
                            }};
                            nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "eaque";
                                    machineId = "deserunt";
                                    networkId = "aliquid";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_ONLY;
                                }}),
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "magni";
                                    machineId = "tempora";
                                    networkId = "possimus";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                }}),
                                add(new NfsExport() {{
                                    allowDev = false;
                                    allowSuid = false;
                                    cidr = "rerum";
                                    machineId = "sed";
                                    networkId = "accusamus";
                                    noRootSquash = false;
                                    permissions = NfsExportPermissionsEnum.READ_WRITE;
                                }}),
                            }};
                            performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_HT;
                            protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                            sizeGb = 774748;
                            snapshotsEnabled = false;
                            storageAggregatePool = "quos";
                            type = VolumeConfigTypeEnum.DISK;
                            userNote = "voluptatum";
                        }}),
                    }};
                    vpcScEnabled = false;
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                email = "Adriana_Wyman@gmail.com";
                fields = "possimus";
                key = "neque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "sapiente";
                uploadProtocol = "mollitia";
            }};            

            BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse res = sdk.projects.baremetalsolutionProjectsLocationsProvisioningConfigsCreate(req, new BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity("quae", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.provisioningConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsProvisioningConfigsSubmit

Submit a provisiong configuration for a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface;
import org.openapis.openapi.models.shared.InstanceConfigInput;
import org.openapis.openapi.models.shared.InstanceConfigNetworkConfigEnum;
import org.openapis.openapi.models.shared.IntakeVlanAttachment;
import org.openapis.openapi.models.shared.LogicalNetworkInterface;
import org.openapis.openapi.models.shared.LogicalNetworkInterfaceNetworkTypeEnum;
import org.openapis.openapi.models.shared.LunRange;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.NetworkConfigBandwidthEnum;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.NetworkConfigServiceCidrEnum;
import org.openapis.openapi.models.shared.NetworkConfigTypeEnum;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.NfsExportPermissionsEnum;
import org.openapis.openapi.models.shared.ProvisioningConfigInput;
import org.openapis.openapi.models.shared.SubmitProvisioningConfigRequestInput;
import org.openapis.openapi.models.shared.VolumeConfigInput;
import org.openapis.openapi.models.shared.VolumeConfigPerformanceTierEnum;
import org.openapis.openapi.models.shared.VolumeConfigProtocolEnum;
import org.openapis.openapi.models.shared.VolumeConfigTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest req = new BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                submitProvisioningConfigRequestInput = new SubmitProvisioningConfigRequestInput() {{
                    email = "Enrico_Haag16@hotmail.com";
                    provisioningConfig = new ProvisioningConfigInput() {{
                        customId = "maiores";
                        email = "Gregorio.Langworth@gmail.com";
                        handoverServiceAccount = "aliquid";
                        instances = new org.openapis.openapi.models.shared.InstanceConfigInput[]{{
                            add(new InstanceConfigInput() {{
                                accountNetworksEnabled = false;
                                clientNetwork = new NetworkAddress() {{
                                    address = "554 Timothy Fords";
                                    existingNetworkId = "blanditiis";
                                    networkId = "numquam";
                                }};
                                hyperthreading = false;
                                id = "380b1f6b-8ca2-475a-a0a0-4c495cc69917";
                                instanceType = "inventore";
                                logicalInterfaces = new org.openapis.openapi.models.shared.GoogleCloudBaremetalsolutionV2LogicalInterface[]{{
                                    add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                        interfaceIndex = 371287;
                                        logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "c1bdb1cf-4b88-48eb-9fc4-ccca99bc7fc0";
                                                ipAddress = "soluta";
                                                network = "fugit";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                            }}),
                                        }};
                                        name = "Ms. Clay Boehm";
                                    }}),
                                    add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                        interfaceIndex = 219860;
                                        logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "42b006d6-7887-48ba-8581-a58208c54fef";
                                                ipAddress = "officia";
                                                network = "natus";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                            }}),
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "95f2eac5-565d-4307-8fee-81206e2813fa";
                                                ipAddress = "aliquam";
                                                network = "deserunt";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                            }}),
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "1c480d3f-2132-4af0-b102-d514f4cc6f18";
                                                ipAddress = "expedita";
                                                network = "hic";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.CLIENT;
                                            }}),
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "621a6a4f-77a8-47ee-be4b-e752c65b3441";
                                                ipAddress = "praesentium";
                                                network = "eveniet";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        name = "Miss Randolph Morissette";
                                    }}),
                                    add(new GoogleCloudBaremetalsolutionV2LogicalInterface() {{
                                        interfaceIndex = 835646;
                                        logicalNetworkInterfaces = new org.openapis.openapi.models.shared.LogicalNetworkInterface[]{{
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "75e0e841-9d8f-484f-944f-3e07edcc4aa5";
                                                ipAddress = "reiciendis";
                                                network = "sequi";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.PRIVATE_;
                                            }}),
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "abd905a9-72e0-4567-a822-7b2d309470bf";
                                                ipAddress = "quam";
                                                network = "est";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                            }}),
                                            add(new LogicalNetworkInterface() {{
                                                defaultGateway = false;
                                                id = "fa87cf53-5a6f-4ae5-8ebf-60c321f023b7";
                                                ipAddress = "nostrum";
                                                network = "temporibus";
                                                networkType = LogicalNetworkInterfaceNetworkTypeEnum.TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        name = "Alma Kunde";
                                    }}),
                                }};
                                networkConfig = InstanceConfigNetworkConfigEnum.NETWORKCONFIG_UNSPECIFIED;
                                networkTemplate = "est";
                                osImage = "accusantium";
                                privateNetwork = new NetworkAddress() {{
                                    address = "758 Kuhic Oval";
                                    existingNetworkId = "sapiente";
                                    networkId = "aperiam";
                                }};
                                userNote = "similique";
                            }}),
                        }};
                        location = "nesciunt";
                        networks = new org.openapis.openapi.models.shared.NetworkConfigInput[]{{
                            add(new NetworkConfigInput() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW2_GBPS;
                                cidr = "repellendus";
                                gcpService = "unde";
                                id = "0c364b7c-15df-4bac-a188-b1c4ee2c8c6c";
                                jumboFramesEnabled = false;
                                serviceCidr = NetworkConfigServiceCidrEnum.HIGH28;
                                type = NetworkConfigTypeEnum.CLIENT;
                                userNote = "beatae";
                                vlanAttachments = new org.openapis.openapi.models.shared.IntakeVlanAttachment[]{{
                                    add(new IntakeVlanAttachment() {{
                                        id = "feeb1c7c-bdb6-4eec-b437-8ba25317747d";
                                        pairingKey = "impedit";
                                    }}),
                                }};
                                vlanSameProject = false;
                            }}),
                            add(new NetworkConfigInput() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW2_GBPS;
                                cidr = "illo";
                                gcpService = "exercitationem";
                                id = "ad2caf5d-d672-43dc-8f5a-e2f3a6b70087";
                                jumboFramesEnabled = false;
                                serviceCidr = NetworkConfigServiceCidrEnum.HIGH26;
                                type = NetworkConfigTypeEnum.CLIENT;
                                userNote = "quis";
                                vlanAttachments = new org.openapis.openapi.models.shared.IntakeVlanAttachment[]{{
                                    add(new IntakeVlanAttachment() {{
                                        id = "143f5a6c-98b5-4555-8080-d40bcacc6cbd";
                                        pairingKey = "laboriosam";
                                    }}),
                                    add(new IntakeVlanAttachment() {{
                                        id = "b5f3ec90-9304-4f92-abad-2553819b474b";
                                        pairingKey = "aperiam";
                                    }}),
                                }};
                                vlanSameProject = false;
                            }}),
                            add(new NetworkConfigInput() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW10_GBPS;
                                cidr = "possimus";
                                gcpService = "fugit";
                                id = "0e56248f-ff63-49a9-90ab-dcab62676696";
                                jumboFramesEnabled = false;
                                serviceCidr = NetworkConfigServiceCidrEnum.HIGH28;
                                type = NetworkConfigTypeEnum.TYPE_UNSPECIFIED;
                                userNote = "itaque";
                                vlanAttachments = new org.openapis.openapi.models.shared.IntakeVlanAttachment[]{{
                                    add(new IntakeVlanAttachment() {{
                                        id = "00221b33-5d89-4acb-becf-da8d0c549ef0";
                                        pairingKey = "ipsum";
                                    }}),
                                    add(new IntakeVlanAttachment() {{
                                        id = "004978a6-1fa1-4cf2-8688-f77c1ffc71dc";
                                        pairingKey = "fuga";
                                    }}),
                                    add(new IntakeVlanAttachment() {{
                                        id = "163f2a3c-80a9-47ff-b34c-ddf857a9e618";
                                        pairingKey = "odio";
                                    }}),
                                    add(new IntakeVlanAttachment() {{
                                        id = "6c6ab21d-29df-4c94-96fe-cd799390066a";
                                        pairingKey = "autem";
                                    }}),
                                }};
                                vlanSameProject = false;
                            }}),
                        }};
                        statusMessage = "assumenda";
                        ticketId = "explicabo";
                        volumes = new org.openapis.openapi.models.shared.VolumeConfigInput[]{{
                            add(new VolumeConfigInput() {{
                                gcpService = "doloremque";
                                id = "00355338-cec0-486f-a21e-9152cb311916";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 728474;
                                        sizeGb = 562065;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 900676;
                                        sizeGb = 218783;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("quos"),
                                    add("illum"),
                                    add("distinctio"),
                                    add("voluptatem"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "quaerat";
                                        machineId = "consequatur";
                                        networkId = "laudantium";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_SHARED;
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                                sizeGb = 231255;
                                snapshotsEnabled = false;
                                storageAggregatePool = "voluptas";
                                type = VolumeConfigTypeEnum.TYPE_UNSPECIFIED;
                                userNote = "earum";
                            }}),
                            add(new VolumeConfigInput() {{
                                gcpService = "tenetur";
                                id = "d455906d-1263-4d48-a935-c2c9e81f30be";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 925847;
                                        sizeGb = 286329;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("magni"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "dolores";
                                        machineId = "illum";
                                        networkId = "iusto";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                }};
                                performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_UNSPECIFIED;
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                                sizeGb = 321697;
                                snapshotsEnabled = false;
                                storageAggregatePool = "voluptate";
                                type = VolumeConfigTypeEnum.FLASH;
                                userNote = "minima";
                            }}),
                            add(new VolumeConfigInput() {{
                                gcpService = "sit";
                                id = "6641870d-9d21-4f9a-9030-c4ecc11a0836";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 177337;
                                        sizeGb = 616183;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 32719;
                                        sizeGb = 384273;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("facilis"),
                                    add("laudantium"),
                                    add("ullam"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "quia";
                                        machineId = "officia";
                                        networkId = "quaerat";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_ONLY;
                                    }}),
                                }};
                                performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_HT;
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                                sizeGb = 958533;
                                snapshotsEnabled = false;
                                storageAggregatePool = "esse";
                                type = VolumeConfigTypeEnum.TYPE_UNSPECIFIED;
                                userNote = "quidem";
                            }}),
                            add(new VolumeConfigInput() {{
                                gcpService = "quisquam";
                                id = "845e320a-319f-44ba-9f94-7c9a867bc424";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 400492;
                                        sizeGb = 431843;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("ad"),
                                    add("quos"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "suscipit";
                                        machineId = "quibusdam";
                                        networkId = "fugiat";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                performanceTier = VolumeConfigPerformanceTierEnum.VOLUME_PERFORMANCE_TIER_ASSIGNED;
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                                sizeGb = 913909;
                                snapshotsEnabled = false;
                                storageAggregatePool = "maiores";
                                type = VolumeConfigTypeEnum.FLASH;
                                userNote = "illo";
                            }}),
                        }};
                        vpcScEnabled = false;
                    }};;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "modi";
                key = "cumque";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "ipsum";
                uploadProtocol = "accusamus";
            }};            

            BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse res = sdk.projects.baremetalsolutionProjectsLocationsProvisioningConfigsSubmit(req, new BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity("quisquam", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.submitProvisioningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsProvisioningQuotasList

List the budget details to provision resources on a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest req = new BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "quibusdam";
                key = "ipsa";
                oauthToken = "accusamus";
                pageSize = 810982L;
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "delectus";
                uploadProtocol = "saepe";
            }};            

            BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse res = sdk.projects.baremetalsolutionProjectsLocationsProvisioningQuotasList(req, new BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity("facere", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProvisioningQuotasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsSshKeysCreate

Register a public SSH key in the specified project for use with the interactive serial console feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SSHKeyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsSshKeysCreateRequest req = new BaremetalsolutionProjectsLocationsSshKeysCreateRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                sshKeyInput = new SSHKeyInput() {{
                    publicKey = "aut";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "numquam";
                key = "corrupti";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "dolore";
                sshKeyId = "esse";
                uploadType = "reiciendis";
                uploadProtocol = "iste";
            }};            

            BaremetalsolutionProjectsLocationsSshKeysCreateResponse res = sdk.projects.baremetalsolutionProjectsLocationsSshKeysCreate(req, new BaremetalsolutionProjectsLocationsSshKeysCreateSecurity("amet", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sshKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsSshKeysList

Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSshKeysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsSshKeysListRequest req = new BaremetalsolutionProjectsLocationsSshKeysListRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "quas";
                key = "voluptatem";
                oauthToken = "provident";
                pageSize = 559248L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "fuga";
                uploadProtocol = "facilis";
            }};            

            BaremetalsolutionProjectsLocationsSshKeysListResponse res = sdk.projects.baremetalsolutionProjectsLocationsSshKeysList(req, new BaremetalsolutionProjectsLocationsSshKeysListSecurity("maiores", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSSHKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesList

List storage volumes in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesListRequest req = new BaremetalsolutionProjectsLocationsVolumesListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "assumenda";
                filter = "repellendus";
                key = "omnis";
                oauthToken = "delectus";
                pageSize = 487765L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quam";
                uploadProtocol = "omnis";
            }};            

            BaremetalsolutionProjectsLocationsVolumesListResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesList(req, new BaremetalsolutionProjectsLocationsVolumesListSecurity("similique", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVolumesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesLunsEvict

Skips lun's cooloff and deletes it now. Lun must be in cooloff state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest req = new BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quis", "in");
                }};
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "fugiat";
                key = "soluta";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "labore";
                uploadProtocol = "vero";
            }};            

            BaremetalsolutionProjectsLocationsVolumesLunsEvictResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesLunsEvict(req, new BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity("eos", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsVolumesLunsList

List storage volume luns for given storage volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesLunsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesLunsListRequest req = new BaremetalsolutionProjectsLocationsVolumesLunsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "enim";
                key = "iure";
                oauthToken = "laudantium";
                pageSize = 265303L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "nulla";
                uploadProtocol = "repudiandae";
            }};            

            BaremetalsolutionProjectsLocationsVolumesLunsListResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesLunsList(req, new BaremetalsolutionProjectsLocationsVolumesLunsListSecurity("quibusdam", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesPatch

Update details of a single storage volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SnapshotReservationDetail;
import org.openapis.openapi.models.shared.VolumeInput;
import org.openapis.openapi.models.shared.VolumePerformanceTierEnum;
import org.openapis.openapi.models.shared.VolumeSnapshotAutoDeleteBehaviorEnum;
import org.openapis.openapi.models.shared.VolumeStateEnum;
import org.openapis.openapi.models.shared.VolumeStorageTypeEnum;
import org.openapis.openapi.models.shared.VolumeWorkloadProfileEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesPatchRequest req = new BaremetalsolutionProjectsLocationsVolumesPatchRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                volumeInput = new VolumeInput() {{
                    autoGrownSizeGib = "unde";
                    currentSizeGib = "quae";
                    emergencySizeGib = "eum";
                    id = "5e628bdf-c203-42b6-8879-923b7e13584f";
                    labels = new java.util.HashMap<String, String>() {{
                        put("deserunt", "itaque");
                        put("et", "eos");
                    }};
                    maxSizeGib = "impedit";
                    notes = "ex";
                    originallyRequestedSizeGib = "praesentium";
                    performanceTier = VolumePerformanceTierEnum.VOLUME_PERFORMANCE_TIER_ASSIGNED;
                    pod = "vitae";
                    remainingSpaceGib = "tenetur";
                    requestedSizeGib = "laudantium";
                    snapshotAutoDeleteBehavior = VolumeSnapshotAutoDeleteBehaviorEnum.SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED;
                    snapshotEnabled = false;
                    snapshotReservationDetail = new SnapshotReservationDetail() {{
                        reservedSpaceGib = "eligendi";
                        reservedSpacePercent = 917877;
                        reservedSpaceRemainingGib = "dicta";
                        reservedSpaceUsedPercent = 81053;
                    }};;
                    snapshotSchedulePolicy = "ullam";
                    state = VolumeStateEnum.READY;
                    storageAggregatePool = "inventore";
                    storageType = VolumeStorageTypeEnum.SSD;
                    workloadProfile = VolumeWorkloadProfileEnum.WORKLOAD_PROFILE_UNSPECIFIED;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "amet";
                key = "voluptate";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "pariatur";
                updateMask = "minus";
                uploadType = "a";
                uploadProtocol = "fuga";
            }};            

            BaremetalsolutionProjectsLocationsVolumesPatchResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesPatch(req, new BaremetalsolutionProjectsLocationsVolumesPatchSecurity("totam", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsVolumesRename

RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesRenameRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesRenameResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesRenameSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RenameVolumeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesRenameRequest req = new BaremetalsolutionProjectsLocationsVolumesRenameRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                renameVolumeRequest = new RenameVolumeRequest() {{
                    newVolumeId = "omnis";
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                fields = "sequi";
                key = "quis";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "rem";
                uploadProtocol = "aliquid";
            }};            

            BaremetalsolutionProjectsLocationsVolumesRenameResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesRename(req, new BaremetalsolutionProjectsLocationsVolumesRenameSecurity("aperiam", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesResize

Emergency Volume resize.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesResizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResizeVolumeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesResizeRequest req = new BaremetalsolutionProjectsLocationsVolumesResizeRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                resizeVolumeRequest = new ResizeVolumeRequest() {{
                    sizeGib = "unde";
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "temporibus";
                key = "minus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "beatae";
                uploadProtocol = "vitae";
            }};            

            BaremetalsolutionProjectsLocationsVolumesResizeResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesResize(req, new BaremetalsolutionProjectsLocationsVolumesResizeSecurity("veritatis", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## baremetalsolutionProjectsLocationsVolumesSnapshotsCreate

Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.VolumeSnapshotInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest req = new BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                volumeSnapshotInput = new VolumeSnapshotInput() {{
                    description = "dicta";
                    name = "Kathy Jacobi";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quaerat";
                key = "facere";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "alias";
                uploadProtocol = "sapiente";
            }};            

            BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesSnapshotsCreate(req, new BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity("officiis", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumeSnapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsDelete

Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest req = new BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "distinctio";
                key = "placeat";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sit";
                uploadProtocol = "possimus";
            }};            

            BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesSnapshotsDelete(req, new BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity("distinctio", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsGet

Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest req = new BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "tempora";
                key = "esse";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "reiciendis";
                uploadProtocol = "facilis";
            }};            

            BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesSnapshotsGet(req, new BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity("aliquam", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumeSnapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsList

Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest req = new BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "rerum";
                key = "placeat";
                oauthToken = "ab";
                pageSize = 319592L;
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "labore";
                uploadProtocol = "impedit";
            }};            

            BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesSnapshotsList(req, new BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity("ut", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVolumeSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot

Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest req = new BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "occaecati");
                    put("itaque", "fuga");
                }};
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "explicabo";
                key = "suscipit";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "sint";
                uploadProtocol = "nobis";
            }};            

            BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse res = sdk.projects.baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot(req, new BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity("qui", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
