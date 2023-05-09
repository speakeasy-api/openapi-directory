# rootVcdVapp

## Overview

vCloud Director vApps.

### Available Operations

* [createOnDemandSnapshotV1](#createondemandsnapshotv1) - Create an on-demand snapshot for a vApp
* [createVappExportV1](#createvappexportv1) - Export vApp snapshot
* [createVappInstantRecoveryV1](#createvappinstantrecoveryv1) - Instant Recovery of vApp virtual machines
* [createVappTemplateSnapshotExport](#createvapptemplatesnapshotexport) - Export of a vApp template snapshot
* [createVcdVappDownloadSnapshotFromCloudV1](#createvcdvappdownloadsnapshotfromcloudv1) - Download snapshot from archive
* [deleteVappSnapshotV1](#deletevappsnapshotv1) - Delete a vApp snapshot
* [deleteVappSnapshotsV1](#deletevappsnapshotsv1) - Delete all snapshots of vApp
* [getVappAsyncRequestStatusV1](#getvappasyncrequeststatusv1) - Get vApp job status
* [getVappSnapshotExportOptionsV1](#getvappsnapshotexportoptionsv1) - Get exportable network configurations
* [getVappSnapshotInstantRecoveryOptionsV1](#getvappsnapshotinstantrecoveryoptionsv1) - Get Instant Recovery information
* [getVappSnapshotV1](#getvappsnapshotv1) - Get vApp snapshot details
* [getVappTemplateSnapshotExportOptions](#getvapptemplatesnapshotexportoptions) - Get Export information for a vApp template snapshot
* [getVcdVappV1](#getvcdvappv1) - Get details of a specific vApp
* [queryVappSnapshotV1](#queryvappsnapshotv1) - Get list of snapshots of vApp
* [queryVcdVappsV1](#queryvcdvappsv1) - Get summary for vApps
* [searchVappV1](#searchvappv1) - Search for a file in a vApp
* [updateVcdVappV1](#updatevcdvappv1) - Update vApp
* [vcdMissedSnapshotsV1](#vcdmissedsnapshotsv1) - Get details about missed snapshots for a vApp

## createOnDemandSnapshotV1

Start an asynchronous job to create an on-demand snapshot for a specified vApp object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandSnapshotV1Request;
import org.openapis.openapi.models.operations.CreateOnDemandSnapshotV1Response;
import org.openapis.openapi.models.shared.BaseOnDemandSnapshotConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sed", "animi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandSnapshotV1Request req = new CreateOnDemandSnapshotV1Request("sequi") {{
                baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig() {{
                    slaId = "eligendi";
                }};;
            }};            

            CreateOnDemandSnapshotV1Response res = sdk.rootVcdVapp.createOnDemandSnapshotV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVappExportV1

Export the specified vApp snapshot into a new vApp or an existing vApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVappExportV1Request;
import org.openapis.openapi.models.operations.CreateVappExportV1Response;
import org.openapis.openapi.models.shared.CreateNewVappParams;
import org.openapis.openapi.models.shared.CreateVappNetworkParams;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VappExportModeEnum;
import org.openapis.openapi.models.shared.VappExportSnapshotJobConfig;
import org.openapis.openapi.models.shared.VappVmIpAddressingModeEnum;
import org.openapis.openapi.models.shared.VappVmNetworkConnection;
import org.openapis.openapi.models.shared.VappVmRestoreSpec;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatum", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateVappExportV1Request req = new CreateVappExportV1Request(                new VappExportSnapshotJobConfig(VappExportModeEnum.EXPORT_TO_TARGET_VAPP,                 new org.openapis.openapi.models.shared.CreateVappNetworkParams[]{{
                                                add(new CreateVappNetworkParams(false, "illum") {{
                                                    isDeployed = false;
                                                    name = "Mindy Williamson";
                                                    newName = "non";
                                                    parentNetworkId = "optio";
                                                }}),
                                                add(new CreateVappNetworkParams(false, "voluptates") {{
                                                    isDeployed = false;
                                                    name = "Irvin MacGyver";
                                                    newName = "laborum";
                                                    parentNetworkId = "perspiciatis";
                                                }}),
                                                add(new CreateVappNetworkParams(false, "mollitia") {{
                                                    isDeployed = false;
                                                    name = "Ann Luettgen";
                                                    newName = "porro";
                                                    parentNetworkId = "aliquid";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.VappVmRestoreSpec[]{{
                                                add(new VappVmRestoreSpec("recusandae",                 new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 899652) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                                        ipAddress = "totam";
                                                                        isConnected = false;
                                                                        macAddress = "iure";
                                                                        networkAdapterType = "maiores";
                                                                        nicIndex = 667646;
                                                                        vappNetworkName = "fugit";
                                                                    }}),
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 109569) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.POOL;
                                                                        ipAddress = "dicta";
                                                                        isConnected = false;
                                                                        macAddress = "ipsam";
                                                                        networkAdapterType = "consequuntur";
                                                                        nicIndex = 765271;
                                                                        vappNetworkName = "quidem";
                                                                    }}),
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.POOL, false, 900676) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                                        ipAddress = "molestias";
                                                                        isConnected = false;
                                                                        macAddress = "beatae";
                                                                        networkAdapterType = "autem";
                                                                        nicIndex = 494765;
                                                                        vappNetworkName = "libero";
                                                                    }}),
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 310195) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                                        ipAddress = "impedit";
                                                                        isConnected = false;
                                                                        macAddress = "quos";
                                                                        networkAdapterType = "illum";
                                                                        nicIndex = 717853;
                                                                        vappNetworkName = "voluptatem";
                                                                    }}),
                                                                }}, "consequatur") {{
                                                    name = "Frances Stokes";
                                                    networkConnections = new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.NONE, false, 926027) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.NONE;
                                                            ipAddress = "impedit";
                                                            isConnected = false;
                                                            macAddress = "unde";
                                                            networkAdapterType = "ut";
                                                            nicIndex = 814585;
                                                            vappNetworkName = "voluptas";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.POOL, false, 44252) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.NONE;
                                                            ipAddress = "facere";
                                                            isConnected = false;
                                                            macAddress = "dignissimos";
                                                            networkAdapterType = "iste";
                                                            nicIndex = 588473;
                                                            vappNetworkName = "dolor";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 852689) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                            ipAddress = "eum";
                                                            isConnected = false;
                                                            macAddress = "laboriosam";
                                                            networkAdapterType = "laborum";
                                                            nicIndex = 422276;
                                                            vappNetworkName = "assumenda";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 188732) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                            ipAddress = "voluptatem";
                                                            isConnected = false;
                                                            macAddress = "alias";
                                                            networkAdapterType = "velit";
                                                            nicIndex = 356805;
                                                            vappNetworkName = "quis";
                                                        }}),
                                                    }};
                                                    storagePolicyId = "quas";
                                                    vcdMoid = "maxime";
                                                }}),
                                                add(new VappVmRestoreSpec("officiis",                 new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.NONE, false, 551778) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                                        ipAddress = "corporis";
                                                                        isConnected = false;
                                                                        macAddress = "quod";
                                                                        networkAdapterType = "dolores";
                                                                        nicIndex = 808050;
                                                                        vappNetworkName = "excepturi";
                                                                    }}),
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 925847) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                                        ipAddress = "sapiente";
                                                                        isConnected = false;
                                                                        macAddress = "ipsum";
                                                                        networkAdapterType = "consequatur";
                                                                        nicIndex = 742899;
                                                                        vappNetworkName = "necessitatibus";
                                                                    }}),
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.MANUAL, false, 168976) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.MANUAL;
                                                                        ipAddress = "adipisci";
                                                                        isConnected = false;
                                                                        macAddress = "magni";
                                                                        networkAdapterType = "aperiam";
                                                                        nicIndex = 172696;
                                                                        vappNetworkName = "illum";
                                                                    }}),
                                                                }}, "beatae") {{
                                                    name = "Levi Johns";
                                                    networkConnections = new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.MANUAL, false, 598193) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.MANUAL;
                                                            ipAddress = "earum";
                                                            isConnected = false;
                                                            macAddress = "tenetur";
                                                            networkAdapterType = "assumenda";
                                                            nicIndex = 294181;
                                                            vappNetworkName = "enim";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 843659) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                            ipAddress = "ex";
                                                            isConnected = false;
                                                            macAddress = "quibusdam";
                                                            networkAdapterType = "dicta";
                                                            nicIndex = 154840;
                                                            vappNetworkName = "commodi";
                                                        }}),
                                                    }};
                                                    storagePolicyId = "numquam";
                                                    vcdMoid = "rem";
                                                }}),
                                                add(new VappVmRestoreSpec("sed",                 new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 761927) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.NONE;
                                                                        ipAddress = "unde";
                                                                        isConnected = false;
                                                                        macAddress = "deserunt";
                                                                        networkAdapterType = "repellendus";
                                                                        nicIndex = 7919;
                                                                        vappNetworkName = "adipisci";
                                                                    }}),
                                                                }}, "tempora") {{
                                                    name = "Geraldine Kling";
                                                    networkConnections = new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 825739) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.MANUAL;
                                                            ipAddress = "laboriosam";
                                                            isConnected = false;
                                                            macAddress = "quaerat";
                                                            networkAdapterType = "quasi";
                                                            nicIndex = 525223;
                                                            vappNetworkName = "dignissimos";
                                                        }}),
                                                    }};
                                                    storagePolicyId = "provident";
                                                    vcdMoid = "facere";
                                                }}),
                                            }}) {{
                                newVappParams = new CreateNewVappParams("debitis", "cumque");;
                                shouldPowerOnVappAfterExport = false;
                                targetVappId = "maxime";
                            }};, "et");            

            CreateVappExportV1Response res = sdk.rootVcdVapp.createVappExportV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVappInstantRecoveryV1

Use Instant Recovery to recover specified vApp virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVappInstantRecoveryV1Request;
import org.openapis.openapi.models.operations.CreateVappInstantRecoveryV1Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VappInstantRecoveryJobConfig;
import org.openapis.openapi.models.shared.VappVmIpAddressingModeEnum;
import org.openapis.openapi.models.shared.VappVmNetworkConnection;
import org.openapis.openapi.models.shared.VappVmRestoreSpec;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("beatae", "id") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateVappInstantRecoveryV1Request req = new CreateVappInstantRecoveryV1Request(                new VappInstantRecoveryJobConfig(                new org.openapis.openapi.models.shared.VappVmRestoreSpec[]{{
                                                add(new VappVmRestoreSpec("amet",                 new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                                    add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.NONE, false, 566669) {{
                                                                        addressingMode = VappVmIpAddressingModeEnum.POOL;
                                                                        ipAddress = "voluptatibus";
                                                                        isConnected = false;
                                                                        macAddress = "numquam";
                                                                        networkAdapterType = "rerum";
                                                                        nicIndex = 678695;
                                                                        vappNetworkName = "quibusdam";
                                                                    }}),
                                                                }}, "numquam") {{
                                                    name = "Chris Kertzmann";
                                                    networkConnections = new org.openapis.openapi.models.shared.VappVmNetworkConnection[]{{
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 154425) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.DHCP;
                                                            ipAddress = "suscipit";
                                                            isConnected = false;
                                                            macAddress = "laudantium";
                                                            networkAdapterType = "facilis";
                                                            nicIndex = 514609;
                                                            vappNetworkName = "ullam";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.MANUAL, false, 207512) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.POOL;
                                                            ipAddress = "quaerat";
                                                            isConnected = false;
                                                            macAddress = "corporis";
                                                            networkAdapterType = "accusamus";
                                                            nicIndex = 481307;
                                                            vappNetworkName = "sapiente";
                                                        }}),
                                                        add(new VappVmNetworkConnection(VappVmIpAddressingModeEnum.DHCP, false, 165545) {{
                                                            addressingMode = VappVmIpAddressingModeEnum.POOL;
                                                            ipAddress = "quisquam";
                                                            isConnected = false;
                                                            macAddress = "praesentium";
                                                            networkAdapterType = "tempora";
                                                            nicIndex = 370052;
                                                            vappNetworkName = "officiis";
                                                        }}),
                                                    }};
                                                    storagePolicyId = "voluptatem";
                                                    vcdMoid = "est";
                                                }}),
                                            }}) {{
                                shouldPowerOnVmsAfterRecovery = false;
                            }};, "molestiae");            

            CreateVappInstantRecoveryV1Response res = sdk.rootVcdVapp.createVappInstantRecoveryV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVappTemplateSnapshotExport

Export a vApp template snapashot to a catalog. Use the options endpoint to confirm that exporting to the catalog defaults or the original organization vDC storage profile is possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVappTemplateSnapshotExportRequest;
import org.openapis.openapi.models.operations.CreateVappTemplateSnapshotExportResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VappTemplateExportJobConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("impedit", "error") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateVappTemplateSnapshotExportRequest req = new CreateVappTemplateSnapshotExportRequest(                new VappTemplateExportJobConfig("animi", "voluptatum", "aliquid") {{
                                storagePolicyId = "nihil";
                            }};, "facilis");            

            CreateVappTemplateSnapshotExportResponse res = sdk.rootVcdVapp.createVappTemplateSnapshotExport(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVcdVappDownloadSnapshotFromCloudV1

Provides a method for retrieving a snapshot that is not available locally, from an archival location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVcdVappDownloadSnapshotFromCloudV1Request;
import org.openapis.openapi.models.operations.CreateVcdVappDownloadSnapshotFromCloudV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("optio", "incidunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateVcdVappDownloadSnapshotFromCloudV1Request req = new CreateVcdVappDownloadSnapshotFromCloudV1Request("eos");            

            CreateVcdVappDownloadSnapshotFromCloudV1Response res = sdk.rootVcdVapp.createVcdVappDownloadSnapshotFromCloudV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVappSnapshotV1

Designate a vApp snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a vApp that is not assigned to an SLA Domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVappSnapshotV1LocationEnum;
import org.openapis.openapi.models.operations.DeleteVappSnapshotV1Request;
import org.openapis.openapi.models.operations.DeleteVappSnapshotV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magnam", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVappSnapshotV1Request req = new DeleteVappSnapshotV1Request("aliquid", DeleteVappSnapshotV1LocationEnum.ALL);            

            DeleteVappSnapshotV1Response res = sdk.rootVcdVapp.deleteVappSnapshotV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVappSnapshotsV1

Delete all snapshots for a specified vApp object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVappSnapshotsV1Request;
import org.openapis.openapi.models.operations.DeleteVappSnapshotsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vel", "ad") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVappSnapshotsV1Request req = new DeleteVappSnapshotsV1Request("quos");            

            DeleteVappSnapshotsV1Response res = sdk.rootVcdVapp.deleteVappSnapshotsV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVappAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVappAsyncRequestStatusV1Request;
import org.openapis.openapi.models.operations.GetVappAsyncRequestStatusV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("illo", "suscipit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVappAsyncRequestStatusV1Request req = new GetVappAsyncRequestStatusV1Request("quibusdam");            

            GetVappAsyncRequestStatusV1Response res = sdk.rootVcdVapp.getVappAsyncRequestStatusV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVappSnapshotExportOptionsV1

Retrieve summary information for the vApp networks that are available for network connections from the virtual machines in the exported vApp snapshot. The summary also specifies the default vApp network for each virtual machine network connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVappSnapshotExportOptionsV1ExportModeEnum;
import org.openapis.openapi.models.operations.GetVappSnapshotExportOptionsV1Request;
import org.openapis.openapi.models.operations.GetVappSnapshotExportOptionsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugiat", "impedit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVappSnapshotExportOptionsV1Request req = new GetVappSnapshotExportOptionsV1Request(GetVappSnapshotExportOptionsV1ExportModeEnum.EXPORT_TO_TARGET_VAPP, "atque") {{
                targetOrgVdcId = "voluptates";
                targetVappId = "maiores";
            }};            

            GetVappSnapshotExportOptionsV1Response res = sdk.rootVcdVapp.getVappSnapshotExportOptionsV1(req);

            if (res.vappExportOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVappSnapshotInstantRecoveryOptionsV1

Retrieve the available vApp network connections and the default vApp network connection for the virtual machines in a vApp snapshot. Use this information to configure an Instant Recovery of specified virtual machines in the vApp snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVappSnapshotInstantRecoveryOptionsV1Request;
import org.openapis.openapi.models.operations.GetVappSnapshotInstantRecoveryOptionsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nemo", "illo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVappSnapshotInstantRecoveryOptionsV1Request req = new GetVappSnapshotInstantRecoveryOptionsV1Request("doloribus");            

            GetVappSnapshotInstantRecoveryOptionsV1Response res = sdk.rootVcdVapp.getVappSnapshotInstantRecoveryOptionsV1(req);

            if (res.vappInstantRecoveryOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVappSnapshotV1

Retrieve detailed information about a specified snapshot for a vApp object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVappSnapshotV1Request;
import org.openapis.openapi.models.operations.GetVappSnapshotV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cumque", "expedita") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVappSnapshotV1Request req = new GetVappSnapshotV1Request("modi");            

            GetVappSnapshotV1Response res = sdk.rootVcdVapp.getVappSnapshotV1(req);

            if (res.vcdVappSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVappTemplateSnapshotExportOptions

Retrieve the available choices vApp template storage profile and organization vDC choices in case of exporting to either original organization vDC defaults of the target catalog. In case advanced option of manually deciding org vdc is preferred, this also provides available storage profile choices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVappTemplateSnapshotExportOptionsRequest;
import org.openapis.openapi.models.operations.GetVappTemplateSnapshotExportOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cumque", "ipsam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVappTemplateSnapshotExportOptionsRequest req = new GetVappTemplateSnapshotExportOptionsRequest("occaecati", "ipsum", "accusamus") {{
                orgVdcId = "quisquam";
            }};            

            GetVappTemplateSnapshotExportOptionsResponse res = sdk.rootVcdVapp.getVappTemplateSnapshotExportOptions(req);

            if (res.vappTemplateExportOptionsUnion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVcdVappV1

Retrieve detailed information for a specified vApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVcdVappV1Request;
import org.openapis.openapi.models.operations.GetVcdVappV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quasi", "fugit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVcdVappV1Request req = new GetVcdVappV1Request("quo");            

            GetVcdVappV1Response res = sdk.rootVcdVapp.getVcdVappV1(req);

            if (res.vcdVappDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVappSnapshotV1

Retrieve summary information for each of the snapshot objects of a specified vApp object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVappSnapshotV1Request;
import org.openapis.openapi.models.operations.QueryVappSnapshotV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("temporibus", "mollitia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVappSnapshotV1Request req = new QueryVappSnapshotV1Request("id");            

            QueryVappSnapshotV1Response res = sdk.rootVcdVapp.queryVappSnapshotV1(req);

            if (res.vcdVappSnapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVcdVappsV1

Retrieve summary information for all vCD vApp objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVcdVappsV1Request;
import org.openapis.openapi.models.operations.QueryVcdVappsV1Response;
import org.openapis.openapi.models.operations.QueryVcdVappsV1SLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryVcdVappsV1SortByEnum;
import org.openapis.openapi.models.operations.QueryVcdVappsV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quibusdam", "ipsa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVcdVappsV1Request req = new QueryVcdVappsV1Request() {{
                effectiveSlaDomainId = "accusamus";
                includeBackupTaskInfo = false;
                isRelic = false;
                limit = 810982;
                name = "Marguerite Windler";
                offset = 748723;
                primaryClusterId = "at";
                slaAssignment = QueryVcdVappsV1SLAAssignmentEnum.DIRECT;
                sortBy = QueryVcdVappsV1SortByEnum.NAME;
                sortOrder = QueryVcdVappsV1SortOrderEnum.DESC;
            }};            

            QueryVcdVappsV1Response res = sdk.rootVcdVapp.queryVcdVappsV1(req);

            if (res.vcdVappSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchVappV1

Aggregated search for a file through snapshots of all virtual machines that are presently part of the vApp. Specify the file using a full path prefix or a filename prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchVappV1Request;
import org.openapis.openapi.models.operations.SearchVappV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("tenetur", "incidunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchVappV1Request req = new SearchVappV1Request("numquam", "corrupti");            

            SearchVappV1Response res = sdk.rootVcdVapp.searchVappV1(req);

            if (res.appSearchResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVcdVappV1

Make changes to the parameters of a specified vApp object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVcdVappV1Request;
import org.openapis.openapi.models.operations.UpdateVcdVappV1Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VcdVappPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("similique", "dolore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVcdVappV1Request req = new UpdateVcdVappV1Request(                new VcdVappPatch() {{
                                configuredSlaDomainId = "esse";
                                isBestEffortSynchronizationEnabled = false;
                                isPaused = false;
                                vcdVmMoidsToExcludeFromSnapshot = new String[]{{
                                    add("iste"),
                                    add("amet"),
                                    add("occaecati"),
                                    add("aut"),
                                }};
                            }};, "impedit");            

            UpdateVcdVappV1Response res = sdk.rootVcdVapp.updateVcdVappV1(req);

            if (res.vcdVappDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vcdMissedSnapshotsV1

Retrieve the timestamp for each missed snapshot for a specified vApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VcdMissedSnapshotsV1Request;
import org.openapis.openapi.models.operations.VcdMissedSnapshotsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minima", "quos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            VcdMissedSnapshotsV1Request req = new VcdMissedSnapshotsV1Request("blanditiis");            

            VcdMissedSnapshotsV1Response res = sdk.rootVcdVapp.vcdMissedSnapshotsV1(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
