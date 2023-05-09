# rootVmwareVm

## Overview

VMware virtual machines.

### Available Operations

* [batchMountSnapshot](#batchmountsnapshot) - Live mount a snapshot each from a set of virtual machines
* [browseVmwareSnapshot](#browsevmwaresnapshot) - List files in VM snapshot
* [bulkCreateOnDemandBackup](#bulkcreateondemandbackup) - Take an on-demand snapshot of multiple virtual machines
* [createDownloadFileJob](#createdownloadfilejob) - Download file from VM snapshot
* [createDownloadSnapshotFromCloud](#createdownloadsnapshotfromcloud) - Download snapshot from archive
* [createExportV1](#createexportv1) - Export VM snapshot
* [createExportWithDownloadFromCloudV1](#createexportwithdownloadfromcloudv1) - Download a snapshot from an archival location, then export a virtual machine using the downloaded snapshot
* [createInstantRecovery](#createinstantrecovery) - Instantly recover a VM
* [createMountV1](#createmountv1) - Live mount a VM from a snapshot
* [createOnDemandBackup](#createondemandbackup) - Create an on-demand snapshot for a VM
* [createRestoreFileJob](#createrestorefilejob) - Restore file from VM snapshot
* [createUnmount](#createunmount) - Delete a Live Mount VM
* [deleteVmwareSnapshot](#deletevmwaresnapshot) - Delete VM snapshot
* [deleteVmwareSnapshots](#deletevmwaresnapshots) - Delete all snapshots of VM
* [getAsyncRequestStatus](#getasyncrequeststatus) - Get asynchronous request details for VM
* [getMountV1](#getmountv1) - Get information for a Live Mount
* [getSnapshot](#getsnapshot) - Get VM snapshot details
* [getVirtualDisk](#getvirtualdisk) - Details about the specific Virtual Disk
* [getVm](#getvm) - Get VM details
* [getVmForceFullSpec](#getvmforcefullspec) - Retrieve the configuration for forcing a full snapshot of a VMware virtual machine
* [getVmwareCdpLiveInfo](#getvmwarecdpliveinfo) - Returns the live CDP info for a set of CDP-enabled virtual machines
* [getVmwareCdpStateInfo](#getvmwarecdpstateinfo) - Returns CDP state info for a set of virtual machines
* [getVmwareMissedRecoverableRanges](#getvmwaremissedrecoverableranges) - Get missed time ranges for point in time recovery
* [getVmwareRecoverableRanges](#getvmwarerecoverableranges) - Get available time ranges for point in time recovery
* [getVmwareVmMissedRecoverableRangesInBatch](#getvmwarevmmissedrecoverablerangesinbatch) - Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines
* [getVmwareVmRecoverableRangesInBatch](#getvmwarevmrecoverablerangesinbatch) - Returns the recoverable ranges for a set of CDP-enabled virtual machines
* [missedSnapshots](#missedsnapshots) - Get details about missed snapshots for a VM
* [queryMountV1](#querymountv1) - Get Live Mount information
* [querySnapshot](#querysnapshot) - Get list of snapshots of VM
* [querySnapshotsForVms](#querysnapshotsforvms) - Get snapshot information for a list of virtual machines
* [queryVm](#queryvm) - Get list of VMs
* [relocateMount](#relocatemount) - Relocate a virtual machine to another datastore
* [requestVmForceFullSnapshot](#requestvmforcefullsnapshot) - Request a full snapshot for the next backup job of a VMware virtual machine
* [runGuestOsScript](#runguestosscript) - Run guest OS script
* [searchVm](#searchvm) - Search for a file from a VM
* [updateMount](#updatemount) - Power a Live Mount on and off
* [updateVirtualDisk](#updatevirtualdisk) - Update a specific Virtual Disk
* [updateVm](#updatevm) - Update VM
* [vmMakePrimary](#vmmakeprimary) - Make this cluster the primary for agents on a set of VMs
* [vmRegisterAgent](#vmregisteragent) - Register Rubrik Backup Service

## batchMountSnapshot

Live mount a snapshot each from a set of virtual machines

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchMountSnapshotResponse;
import org.openapis.openapi.models.shared.BatchMountSnapshotJobConfig;
import org.openapis.openapi.models.shared.MountSnapshotJobConfigForBatchV1;
import org.openapis.openapi.models.shared.MountSnapshotJobConfigV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cupiditate", "modi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BatchMountSnapshotJobConfig req = new BatchMountSnapshotJobConfig(                new org.openapis.openapi.models.shared.MountSnapshotJobConfigForBatchV1[]{{
                                add(new MountSnapshotJobConfigForBatchV1(                new MountSnapshotJobConfigV1() {{
                                                    createDatastoreOnly = false;
                                                    dataStoreName = "libero";
                                                    disableNetwork = false;
                                                    hostId = "ratione";
                                                    keepMacAddresses = false;
                                                    powerOn = false;
                                                    removeNetworkDevices = false;
                                                    shouldRecoverTags = false;
                                                    vlan = 474872;
                                                    vmName = "optio";
                                                }};, "saepe") {{
                                    config = new MountSnapshotJobConfigV1() {{
                                        createDatastoreOnly = false;
                                        dataStoreName = "explicabo";
                                        disableNetwork = false;
                                        hostId = "modi";
                                        keepMacAddresses = false;
                                        powerOn = false;
                                        removeNetworkDevices = false;
                                        shouldRecoverTags = false;
                                        vlan = 39210;
                                        vmName = "odio";
                                    }};
                                    snapshotAfterDate = OffsetDateTime.parse("2022-06-20T20:54:51.238Z");
                                    snapshotBeforeDate = OffsetDateTime.parse("2022-01-14T17:17:09.533Z");
                                    snapshotId = "quam";
                                    vmId = "dolorum";
                                }}),
                                add(new MountSnapshotJobConfigForBatchV1(                new MountSnapshotJobConfigV1() {{
                                                    createDatastoreOnly = false;
                                                    dataStoreName = "quidem";
                                                    disableNetwork = false;
                                                    hostId = "exercitationem";
                                                    keepMacAddresses = false;
                                                    powerOn = false;
                                                    removeNetworkDevices = false;
                                                    shouldRecoverTags = false;
                                                    vlan = 332777;
                                                    vmName = "modi";
                                                }};, "quasi") {{
                                    config = new MountSnapshotJobConfigV1() {{
                                        createDatastoreOnly = false;
                                        dataStoreName = "maiores";
                                        disableNetwork = false;
                                        hostId = "accusantium";
                                        keepMacAddresses = false;
                                        powerOn = false;
                                        removeNetworkDevices = false;
                                        shouldRecoverTags = false;
                                        vlan = 150715;
                                        vmName = "eos";
                                    }};
                                    snapshotAfterDate = OffsetDateTime.parse("2022-08-30T10:36:46.241Z");
                                    snapshotBeforeDate = OffsetDateTime.parse("2022-06-04T05:07:59.763Z");
                                    snapshotId = "labore";
                                    vmId = "fugiat";
                                }}),
                            }});            

            BatchMountSnapshotResponse res = sdk.rootVmwareVm.batchMountSnapshot(req);

            if (res.batchAsyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## browseVmwareSnapshot

For a virtual machine snapshot, list the directories and files that are beneath a specified file system path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseVmwareSnapshotRequest;
import org.openapis.openapi.models.operations.BrowseVmwareSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "similique") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BrowseVmwareSnapshotRequest req = new BrowseVmwareSnapshotRequest("possimus", "quo") {{
                limit = 379666;
                offset = 405041;
            }};            

            BrowseVmwareSnapshotResponse res = sdk.rootVmwareVm.browseVmwareSnapshot(req);

            if (res.browseResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkCreateOnDemandBackup

Bulk operation of taking on-demand snapshot for given virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateOnDemandBackupResponse;
import org.openapis.openapi.models.shared.BulkOnDemandSnapshotJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sint", "est") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BulkOnDemandSnapshotJobConfig req = new BulkOnDemandSnapshotJobConfig(                new String[]{{
                                add("provident"),
                                add("alias"),
                                add("deserunt"),
                                add("fugit"),
                            }}) {{
                slaId = "autem";
            }};            

            BulkCreateOnDemandBackupResponse res = sdk.rootVmwareVm.bulkCreateOnDemandBackup(req);

            if (res.batchAsyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDownloadFileJob

Create a request to download a file from a virtual machine snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDownloadFileJobRequest;
import org.openapis.openapi.models.operations.CreateDownloadFileJobResponse;
import org.openapis.openapi.models.shared.DownloadFileJobConfig;
import org.openapis.openapi.models.shared.LegalHoldDownloadConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quo", "molestiae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateDownloadFileJobRequest req = new CreateDownloadFileJobRequest(                new DownloadFileJobConfig("maxime") {{
                                legalHoldDownloadConfig = new LegalHoldDownloadConfig(false);;
                            }};, "facere");            

            CreateDownloadFileJobResponse res = sdk.rootVmwareVm.createDownloadFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDownloadSnapshotFromCloud

Provides a method for retrieving a snapshot, that is not available locally, from an archival location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDownloadSnapshotFromCloudRequest;
import org.openapis.openapi.models.operations.CreateDownloadSnapshotFromCloudResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("impedit", "cupiditate") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateDownloadSnapshotFromCloudRequest req = new CreateDownloadSnapshotFromCloudRequest("deleniti");            

            CreateDownloadSnapshotFromCloudResponse res = sdk.rootVmwareVm.createDownloadSnapshotFromCloud(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExportV1

Export a virtual machine from a snapshot, using a specified hypervisor host as the datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportV1Request;
import org.openapis.openapi.models.operations.CreateExportV1Response;
import org.openapis.openapi.models.shared.ExportSnapshotJobConfigV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quasi", "maiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateExportV1Request req = new CreateExportV1Request(                new ExportSnapshotJobConfigV1("voluptatem") {{
                                disableNetwork = false;
                                hostId = "aliquid";
                                keepMacAddresses = false;
                                powerOn = false;
                                removeNetworkDevices = false;
                                shouldRecoverTags = false;
                                unregisterVm = false;
                                vmName = "laudantium";
                            }};, "unde");            

            CreateExportV1Response res = sdk.rootVmwareVm.createExportV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExportWithDownloadFromCloudV1

Download a snapshot from an archival location and then export a virtual machine using the downloaded snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportWithDownloadFromCloudV1Request;
import org.openapis.openapi.models.operations.CreateExportWithDownloadFromCloudV1Response;
import org.openapis.openapi.models.shared.ExportSnapshotJobConfigV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateExportWithDownloadFromCloudV1Request req = new CreateExportWithDownloadFromCloudV1Request(                new ExportSnapshotJobConfigV1("facere") {{
                                disableNetwork = false;
                                hostId = "ea";
                                keepMacAddresses = false;
                                powerOn = false;
                                removeNetworkDevices = false;
                                shouldRecoverTags = false;
                                unregisterVm = false;
                                vmName = "libero";
                            }};, "nam");            

            CreateExportWithDownloadFromCloudV1Response res = sdk.rootVmwareVm.createExportWithDownloadFromCloudV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInstantRecovery

Instantly recovery a virtual machine from a snapshot. The Instant Recovery request starts the virtual machine with networking enabled and renames and powers off the source virtual machine, if it still exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInstantRecoveryRequest;
import org.openapis.openapi.models.operations.CreateInstantRecoveryResponse;
import org.openapis.openapi.models.shared.InstantRecoveryJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("amet", "adipisci") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateInstantRecoveryRequest req = new CreateInstantRecoveryRequest(                new InstantRecoveryJobConfig() {{
                                disableNetwork = false;
                                hostId = "minus";
                                keepMacAddresses = false;
                                powerOn = false;
                                preserveMoid = false;
                                removeNetworkDevices = false;
                                shouldRecoverTags = false;
                                vlan = 943828;
                                vmName = "similique";
                            }};, "fuga");            

            CreateInstantRecoveryResponse res = sdk.rootVmwareVm.createInstantRecovery(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMountV1

Create a request to Live Mount a virtual machine from a snapshot using a specified configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMountV1Request;
import org.openapis.openapi.models.operations.CreateMountV1Response;
import org.openapis.openapi.models.shared.MountSnapshotJobConfigV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consectetur", "labore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateMountV1Request req = new CreateMountV1Request("laudantium") {{
                mountSnapshotJobConfigV1 = new MountSnapshotJobConfigV1() {{
                    createDatastoreOnly = false;
                    dataStoreName = "cumque";
                    disableNetwork = false;
                    hostId = "adipisci";
                    keepMacAddresses = false;
                    powerOn = false;
                    removeNetworkDevices = false;
                    shouldRecoverTags = false;
                    vlan = 83164;
                    vmName = "nam";
                }};;
            }};            

            CreateMountV1Response res = sdk.rootVmwareVm.createMountV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOnDemandBackup

Use the ID of a virtual machine to create an on-demand snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandBackupRequest;
import org.openapis.openapi.models.operations.CreateOnDemandBackupResponse;
import org.openapis.openapi.models.shared.BaseOnDemandSnapshotConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "magnam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandBackupRequest req = new CreateOnDemandBackupRequest("aperiam") {{
                baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig() {{
                    slaId = "ducimus";
                }};;
            }};            

            CreateOnDemandBackupResponse res = sdk.rootVmwareVm.createOnDemandBackup(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRestoreFileJob

Create a request to restore a file or folder to the source virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRestoreFileJobRequest;
import org.openapis.openapi.models.operations.CreateRestoreFileJobResponse;
import org.openapis.openapi.models.shared.RestoreFileJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("itaque", "necessitatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateRestoreFileJobRequest req = new CreateRestoreFileJobRequest(                new RestoreFileJobConfig("numquam", "doloribus") {{
                                domainName = "eligendi";
                                ignoreErrors = false;
                                password = "sapiente";
                                shouldRestoreXAttrs = false;
                                shouldSaveCredentials = false;
                                shouldUseAgent = false;
                                username = "Aaliyah13";
                            }};, "nobis");            

            CreateRestoreFileJobResponse res = sdk.rootVmwareVm.createRestoreFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUnmount

Create a request to delete a Live Mount virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUnmountRequest;
import org.openapis.openapi.models.operations.CreateUnmountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nihil", "voluptatum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateUnmountRequest req = new CreateUnmountRequest("reiciendis") {{
                force = false;
            }};            

            CreateUnmountResponse res = sdk.rootVmwareVm.createUnmount(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVmwareSnapshot

Designate a snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a virtual machine that is not assigned to an SLA Domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVmwareSnapshotLocationEnum;
import org.openapis.openapi.models.operations.DeleteVmwareSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteVmwareSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vitae", "ullam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVmwareSnapshotRequest req = new DeleteVmwareSnapshotRequest("nisi", DeleteVmwareSnapshotLocationEnum.ALL);            

            DeleteVmwareSnapshotResponse res = sdk.rootVmwareVm.deleteVmwareSnapshot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVmwareSnapshots

Delete all of the snapshots from a virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVmwareSnapshotsRequest;
import org.openapis.openapi.models.operations.DeleteVmwareSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptas", "ratione") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteVmwareSnapshotsRequest req = new DeleteVmwareSnapshotsRequest("excepturi");            

            DeleteVmwareSnapshotsResponse res = sdk.rootVmwareVm.deleteVmwareSnapshots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAsyncRequestStatus

Get the details of an asynchronous request that involves a VMware virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "est") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAsyncRequestStatusRequest req = new GetAsyncRequestStatusRequest("perferendis");            

            GetAsyncRequestStatusResponse res = sdk.rootVmwareVm.getAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMountV1

Retrieve detailed information for a specified Live Mount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMountV1Request;
import org.openapis.openapi.models.operations.GetMountV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quibusdam", "impedit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMountV1Request req = new GetMountV1Request("ducimus");            

            GetMountV1Response res = sdk.rootVmwareVm.getMountV1(req);

            if (res.vmwareVmMountDetailV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshot

Retrieve detailed information about a virtual machine snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotRequest;
import org.openapis.openapi.models.operations.GetSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nisi", "nisi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSnapshotRequest req = new GetSnapshotRequest("dolor");            

            GetSnapshotResponse res = sdk.rootVmwareVm.getSnapshot(req);

            if (res.vmSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVirtualDisk

Detailed about the specific Virtual Disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVirtualDiskRequest;
import org.openapis.openapi.models.operations.GetVirtualDiskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugit", "dolore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVirtualDiskRequest req = new GetVirtualDiskRequest("maxime");            

            GetVirtualDiskResponse res = sdk.rootVmwareVm.getVirtualDisk(req);

            if (res.virtualDiskDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVm

Retrieve details for a virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmRequest;
import org.openapis.openapi.models.operations.GetVmResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maxime", "expedita") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmRequest req = new GetVmRequest("accusantium");            

            GetVmResponse res = sdk.rootVmwareVm.getVm(req);

            if (res.virtualMachineDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmForceFullSpec

Retrieve the configuration that has been set for forcing a full snapshot for a VMware virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmForceFullSpecRequest;
import org.openapis.openapi.models.operations.GetVmForceFullSpecResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ea", "impedit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmForceFullSpecRequest req = new GetVmForceFullSpecRequest("totam");            

            GetVmForceFullSpecResponse res = sdk.rootVmwareVm.getVmForceFullSpec(req);

            if (res.vmForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareCdpLiveInfo

Returns the live CDP info for a set of CDP-enabled virtual machines

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareCdpLiveInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("optio", "est") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("consequuntur"),
            }}            

            GetVmwareCdpLiveInfoResponse res = sdk.rootVmwareVm.getVmwareCdpLiveInfo(req);

            if (res.batchVmwareCdpLiveInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareCdpStateInfo

Returns CDP state info for a set of virtual machines

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareCdpStateInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repellendus", "sit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("enim"),
            }}            

            GetVmwareCdpStateInfoResponse res = sdk.rootVmwareVm.getVmwareCdpStateInfo(req);

            if (res.batchVmwareCdpStateInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareMissedRecoverableRanges

Gets a list of time ranges to which a CDP-enabled virtual machine cannot perform a point-in-time recovery. The time ranges are indicated by start and end timestamps listed as date-time strings.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareMissedRecoverableRangesRequest;
import org.openapis.openapi.models.operations.GetVmwareMissedRecoverableRangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aspernatur", "perspiciatis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareMissedRecoverableRangesRequest req = new GetVmwareMissedRecoverableRangesRequest("magni") {{
                afterTime = OffsetDateTime.parse("2022-12-30T23:50:22.523Z");
                beforeTime = OffsetDateTime.parse("2021-12-07T13:50:19.554Z");
            }};            

            GetVmwareMissedRecoverableRangesResponse res = sdk.rootVmwareVm.getVmwareMissedRecoverableRanges(req);

            if (res.vmwareRecoverableRangeListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareRecoverableRanges

Gets time ranges available for point-in-time recovery. The time ranges are indicated by start and end date-time strings.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareRecoverableRangesRequest;
import org.openapis.openapi.models.operations.GetVmwareRecoverableRangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("possimus", "ipsam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVmwareRecoverableRangesRequest req = new GetVmwareRecoverableRangesRequest("odio") {{
                afterTime = OffsetDateTime.parse("2022-11-12T23:49:14.405Z");
                beforeTime = OffsetDateTime.parse("2020-06-13T13:29:46.160Z");
            }};            

            GetVmwareRecoverableRangesResponse res = sdk.rootVmwareVm.getVmwareRecoverableRanges(req);

            if (res.vmwareRecoverableRangeListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareVmMissedRecoverableRangesInBatch

Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareVmMissedRecoverableRangesInBatchResponse;
import org.openapis.openapi.models.shared.BatchVmwareVmMissedRecoverableRangesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("praesentium", "sint") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BatchVmwareVmMissedRecoverableRangesRequest req = new BatchVmwareVmMissedRecoverableRangesRequest(                new String[]{{
                                add("cum"),
                                add("voluptatum"),
                            }}) {{
                afterTime = OffsetDateTime.parse("2021-05-20T06:36:27.073Z");
                beforeTime = OffsetDateTime.parse("2022-06-27T19:49:58.836Z");
            }};            

            GetVmwareVmMissedRecoverableRangesInBatchResponse res = sdk.rootVmwareVm.getVmwareVmMissedRecoverableRangesInBatch(req);

            if (res.batchVmwareVmMissedRecoverableRanges != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVmwareVmRecoverableRangesInBatch

Returns the recoverable ranges for a set of CDP-enabled virtual machines

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVmwareVmRecoverableRangesInBatchResponse;
import org.openapis.openapi.models.shared.BatchVmwareVmRecoverableRangesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "pariatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BatchVmwareVmRecoverableRangesRequest req = new BatchVmwareVmRecoverableRangesRequest(                new String[]{{
                                add("cupiditate"),
                                add("nemo"),
                                add("natus"),
                            }}) {{
                afterTime = OffsetDateTime.parse("2022-05-31T04:22:13.689Z");
                beforeTime = OffsetDateTime.parse("2022-10-12T05:14:39.515Z");
            }};            

            GetVmwareVmRecoverableRangesInBatchResponse res = sdk.rootVmwareVm.getVmwareVmRecoverableRangesInBatch(req);

            if (res.batchVmwareVmRecoverableRanges != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## missedSnapshots

Retrieve details about the missed snapshots for a virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MissedSnapshotsRequest;
import org.openapis.openapi.models.operations.MissedSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nostrum", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MissedSnapshotsRequest req = new MissedSnapshotsRequest("tenetur");            

            MissedSnapshotsResponse res = sdk.rootVmwareVm.missedSnapshots(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMountV1

Retrieve summary information about Live Mount activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMountV1Request;
import org.openapis.openapi.models.operations.QueryMountV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("molestiae", "dolore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMountV1Request req = new QueryMountV1Request() {{
                limit = 356343;
                offset = 245990;
                vmId = "adipisci";
            }};            

            QueryMountV1Response res = sdk.rootVmwareVm.queryMountV1(req);

            if (res.vmwareVmMountSummaryV1ListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySnapshot

Retrieve summary information for the snapshots of a virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySnapshotRequest;
import org.openapis.openapi.models.operations.QuerySnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cupiditate", "occaecati") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QuerySnapshotRequest req = new QuerySnapshotRequest("numquam");            

            QuerySnapshotResponse res = sdk.rootVmwareVm.querySnapshot(req);

            if (res.vmSnapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySnapshotsForVms

Retrieve snapshot summaries for a list of virtual machines.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySnapshotsForVmsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugiat", "molestiae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("repellendus"),
                add("saepe"),
                add("amet"),
            }}            

            QuerySnapshotsForVmsResponse res = sdk.rootVmwareVm.querySnapshotsForVms(req);

            if (res.batchVmSnapshotSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVm

Get summary of all the VMs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVmRequest;
import org.openapis.openapi.models.operations.QueryVmResponse;
import org.openapis.openapi.models.operations.QueryVmSLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryVmSortByEnum;
import org.openapis.openapi.models.operations.QueryVmSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("distinctio", "vel") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVmRequest req = new QueryVmRequest() {{
                effectiveSlaDomainId = "necessitatibus";
                guestOsName = "iste";
                isRelic = false;
                limit = 201710;
                moid = "corrupti";
                name = "Courtney Hermann";
                offset = 739946;
                primaryClusterId = "in";
                slaAssignment = QueryVmSLAAssignmentEnum.UNASSIGNED;
                sortBy = QueryVmSortByEnum.MOID;
                sortOrder = QueryVmSortOrderEnum.ASC;
            }};            

            QueryVmResponse res = sdk.rootVmwareVm.queryVm(req);

            if (res.virtualMachineSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## relocateMount

Run storage VMotion to relocate a specified Live Mount into another data store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RelocateMountRequest;
import org.openapis.openapi.models.operations.RelocateMountResponse;
import org.openapis.openapi.models.shared.RelocateMountConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fugit", "ullam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RelocateMountRequest req = new RelocateMountRequest(                new RelocateMountConfig("ullam");, "doloremque");            

            RelocateMountResponse res = sdk.rootVmwareVm.relocateMount(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestVmForceFullSnapshot

Request a full snapshot to be taken for the next backup job of a VMware virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestVmForceFullSnapshotRequest;
import org.openapis.openapi.models.operations.RequestVmForceFullSnapshotResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VmForceFullRequest;
import org.openapis.openapi.models.shared.VmwareVdiskForceFullInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("est", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestVmForceFullSnapshotRequest req = new RequestVmForceFullSnapshotRequest(                new VmForceFullRequest() {{
                                virtualDiskInfos = new org.openapis.openapi.models.shared.VmwareVdiskForceFullInfo[]{{
                                    add(new VmwareVdiskForceFullInfo(false, "totam") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "adipisci";
                                    }}),
                                    add(new VmwareVdiskForceFullInfo(false, "deserunt") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "qui";
                                    }}),
                                    add(new VmwareVdiskForceFullInfo(false, "incidunt") {{
                                        shouldDedupe = false;
                                        virtualDiskId = "eligendi";
                                    }}),
                                }};
                            }};, "deleniti");            

            RequestVmForceFullSnapshotResponse res = sdk.rootVmwareVm.requestVmForceFullSnapshot(req);

            if (res.vmForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runGuestOsScript

Run the specified preBackup, postSnap, or postBackup script in the guest OS of a virtual machine. The script must exist and meet requirements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunGuestOsScriptRequest;
import org.openapis.openapi.models.operations.RunGuestOsScriptResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VmGuestScriptRunConfig;
import org.openapis.openapi.models.shared.VmGuestScriptRunConfigPhaseEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolor", "est") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RunGuestOsScriptRequest req = new RunGuestOsScriptRequest(                new VmGuestScriptRunConfig(VmGuestScriptRunConfigPhaseEnum.POST_BACKUP);, "possimus");            

            RunGuestOsScriptResponse res = sdk.rootVmwareVm.runGuestOsScript(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchVm

Search for a file in the snapshots of a a virtual machine. Specify the file by full path prefix or filename prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchVmRequest;
import org.openapis.openapi.models.operations.SearchVmResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odit", "consectetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchVmRequest req = new SearchVmRequest("inventore", "minima") {{
                cursor = "facilis";
                limit = 708360;
            }};            

            SearchVmResponse res = sdk.rootVmwareVm.searchVm(req);

            if (res.searchResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMount

Power a specified Live Mount virtual machine on or off. Pass **_true_** to power the virtual machine on and pass **_false_** to power the virtual machine off.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMountRequest;
import org.openapis.openapi.models.operations.UpdateMountResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMountConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deserunt", "nisi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMountRequest req = new UpdateMountRequest(                new UpdateMountConfig(false) {{
                                shouldForce = false;
                            }};, "ipsam");            

            UpdateMountResponse res = sdk.rootVmwareVm.updateMount(req);

            if (res.vmwareVmMountDetailV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualDisk

Update a specific Virtual Disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualDiskRequest;
import org.openapis.openapi.models.operations.UpdateVirtualDiskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualDiskUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatem", "illo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVirtualDiskRequest req = new UpdateVirtualDiskRequest(                new VirtualDiskUpdate() {{
                                excludeFromSnapshots = false;
                            }};, "iure");            

            UpdateVirtualDiskResponse res = sdk.rootVmwareVm.updateVirtualDisk(req);

            if (res.virtualDiskDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVm

Update a virtual machine with specified properties. Use the guestCredential field to update the guest credential for a specified virtual machine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVmRequest;
import org.openapis.openapi.models.operations.UpdateVmResponse;
import org.openapis.openapi.models.shared.BaseGuestCredential;
import org.openapis.openapi.models.shared.CloudInstantiationSpec;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VirtualMachineScriptDetail;
import org.openapis.openapi.models.shared.VirtualMachineScriptDetailFailureHandlingEnum;
import org.openapis.openapi.models.shared.VirtualMachineUpdateWithSecret;
import org.openapis.openapi.models.shared.VirtualMachineUpdateWithSecretSnapshotConsistencyMandateEnum;
import org.openapis.openapi.models.shared.VmwareAdaptiveThrottlingSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "eveniet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateVmRequest req = new UpdateVmRequest(                new VirtualMachineUpdateWithSecret() {{
                                cloudInstantiationSpec = new CloudInstantiationSpec(62224L);;
                                configuredSlaDomainId = "ea";
                                guestCredential = new BaseGuestCredential("asperiores", "veniam");;
                                isArrayIntegrationEnabled = false;
                                isVmPaused = false;
                                maxNestedVsphereSnapshots = 695408;
                                postBackupScript = new VirtualMachineScriptDetail(VirtualMachineScriptDetailFailureHandlingEnum.CONTINUE_, "eum", 644416L);;
                                postSnapScript = new VirtualMachineScriptDetail(VirtualMachineScriptDetailFailureHandlingEnum.CONTINUE_, "nemo", 565446L);;
                                preBackupScript = new VirtualMachineScriptDetail(VirtualMachineScriptDetailFailureHandlingEnum.ABORT, "expedita", 787850L);;
                                shouldRefreshCacheAfterUpdate = false;
                                snapshotConsistencyMandate = VirtualMachineUpdateWithSecretSnapshotConsistencyMandateEnum.FILE_SYSTEM_CONSISTENT;
                                throttlingSettings = new VmwareAdaptiveThrottlingSettings() {{
                                    cpuUtilizationThreshold = 708075;
                                    datastoreIoLatencyThreshold = 826478;
                                    ioLatencyThreshold = 921916;
                                }};;
                            }};, "maiores");            

            UpdateVmResponse res = sdk.rootVmwareVm.updateVm(req);

            if (res.virtualMachineDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmMakePrimary

Migrate the primary cluster with which the agent is able to communicate. For disaster recovery when migrating everything over from another cluster, the /host/make_primary endpoint can be used with the oldPrimaryClusterUuid parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmMakePrimaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsum", "commodi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("fugit"),
            }}            

            VmMakePrimaryResponse res = sdk.rootVmwareVm.vmMakePrimary(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## vmRegisterAgent

Register the Rubrik Backup Service that is running on a specified host with the specified Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VmRegisterAgentRequest;
import org.openapis.openapi.models.operations.VmRegisterAgentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nam", "ex") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            VmRegisterAgentRequest req = new VmRegisterAgentRequest("neque");            

            VmRegisterAgentResponse res = sdk.rootVmwareVm.vmRegisterAgent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
