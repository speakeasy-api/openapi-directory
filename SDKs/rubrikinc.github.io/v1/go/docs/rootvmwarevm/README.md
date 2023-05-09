# RootVmwareVM

## Overview

VMware virtual machines.

### Available Operations

* [BatchMountSnapshot](#batchmountsnapshot) - Live mount a snapshot each from a set of virtual machines
* [BrowseVmwareSnapshot](#browsevmwaresnapshot) - List files in VM snapshot
* [BulkCreateOnDemandBackup](#bulkcreateondemandbackup) - Take an on-demand snapshot of multiple virtual machines
* [CreateDownloadFileJob](#createdownloadfilejob) - Download file from VM snapshot
* [CreateDownloadSnapshotFromCloud](#createdownloadsnapshotfromcloud) - Download snapshot from archive
* [CreateExportV1](#createexportv1) - Export VM snapshot
* [CreateExportWithDownloadFromCloudV1](#createexportwithdownloadfromcloudv1) - Download a snapshot from an archival location, then export a virtual machine using the downloaded snapshot
* [CreateInstantRecovery](#createinstantrecovery) - Instantly recover a VM
* [CreateMountV1](#createmountv1) - Live mount a VM from a snapshot
* [CreateOnDemandBackup](#createondemandbackup) - Create an on-demand snapshot for a VM
* [CreateRestoreFileJob](#createrestorefilejob) - Restore file from VM snapshot
* [CreateUnmount](#createunmount) - Delete a Live Mount VM
* [DeleteVmwareSnapshot](#deletevmwaresnapshot) - Delete VM snapshot
* [DeleteVmwareSnapshots](#deletevmwaresnapshots) - Delete all snapshots of VM
* [GetAsyncRequestStatus](#getasyncrequeststatus) - Get asynchronous request details for VM
* [GetMountV1](#getmountv1) - Get information for a Live Mount
* [GetSnapshot](#getsnapshot) - Get VM snapshot details
* [GetVirtualDisk](#getvirtualdisk) - Details about the specific Virtual Disk
* [GetVM](#getvm) - Get VM details
* [GetVMForceFullSpec](#getvmforcefullspec) - Retrieve the configuration for forcing a full snapshot of a VMware virtual machine
* [GetVmwareCdpLiveInfo](#getvmwarecdpliveinfo) - Returns the live CDP info for a set of CDP-enabled virtual machines
* [GetVmwareCdpStateInfo](#getvmwarecdpstateinfo) - Returns CDP state info for a set of virtual machines
* [GetVmwareMissedRecoverableRanges](#getvmwaremissedrecoverableranges) - Get missed time ranges for point in time recovery
* [GetVmwareRecoverableRanges](#getvmwarerecoverableranges) - Get available time ranges for point in time recovery
* [GetVmwareVMMissedRecoverableRangesInBatch](#getvmwarevmmissedrecoverablerangesinbatch) - Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines
* [GetVmwareVMRecoverableRangesInBatch](#getvmwarevmrecoverablerangesinbatch) - Returns the recoverable ranges for a set of CDP-enabled virtual machines
* [MissedSnapshots](#missedsnapshots) - Get details about missed snapshots for a VM
* [QueryMountV1](#querymountv1) - Get Live Mount information
* [QuerySnapshot](#querysnapshot) - Get list of snapshots of VM
* [QuerySnapshotsForVms](#querysnapshotsforvms) - Get snapshot information for a list of virtual machines
* [QueryVM](#queryvm) - Get list of VMs
* [RelocateMount](#relocatemount) - Relocate a virtual machine to another datastore
* [RequestVMForceFullSnapshot](#requestvmforcefullsnapshot) - Request a full snapshot for the next backup job of a VMware virtual machine
* [RunGuestOsScript](#runguestosscript) - Run guest OS script
* [SearchVM](#searchvm) - Search for a file from a VM
* [UpdateMount](#updatemount) - Power a Live Mount on and off
* [UpdateVirtualDisk](#updatevirtualdisk) - Update a specific Virtual Disk
* [UpdateVM](#updatevm) - Update VM
* [VMMakePrimary](#vmmakeprimary) - Make this cluster the primary for agents on a set of VMs
* [VMRegisterAgent](#vmregisteragent) - Register Rubrik Backup Service

## BatchMountSnapshot

Live mount a snapshot each from a set of virtual machines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.BatchMountSnapshot(ctx, shared.BatchMountSnapshotJobConfig{
        Snapshots: []shared.MountSnapshotJobConfigForBatchV1{
            shared.MountSnapshotJobConfigForBatchV1{
                Config: shared.MountSnapshotJobConfigV1{
                    CreateDatastoreOnly: sdk.Bool(false),
                    DataStoreName: sdk.String("dolorem"),
                    DisableNetwork: sdk.Bool(false),
                    HostID: sdk.String("vero"),
                    KeepMacAddresses: sdk.Bool(false),
                    PowerOn: sdk.Bool(false),
                    RemoveNetworkDevices: sdk.Bool(false),
                    ShouldRecoverTags: sdk.Bool(false),
                    Vlan: sdk.Int(459564),
                    VMName: sdk.String("vero"),
                },
                SnapshotAfterDate: types.MustTimeFromString("2022-03-10T00:29:53.497Z"),
                SnapshotBeforeDate: types.MustTimeFromString("2022-02-12T05:02:03.692Z"),
                SnapshotID: sdk.String("vero"),
                VMID: "nisi",
            },
            shared.MountSnapshotJobConfigForBatchV1{
                Config: shared.MountSnapshotJobConfigV1{
                    CreateDatastoreOnly: sdk.Bool(false),
                    DataStoreName: sdk.String("recusandae"),
                    DisableNetwork: sdk.Bool(false),
                    HostID: sdk.String("deleniti"),
                    KeepMacAddresses: sdk.Bool(false),
                    PowerOn: sdk.Bool(false),
                    RemoveNetworkDevices: sdk.Bool(false),
                    ShouldRecoverTags: sdk.Bool(false),
                    Vlan: sdk.Int(749337),
                    VMName: sdk.String("excepturi"),
                },
                SnapshotAfterDate: types.MustTimeFromString("2022-04-13T22:58:15.771Z"),
                SnapshotBeforeDate: types.MustTimeFromString("2021-06-09T00:38:41.199Z"),
                SnapshotID: sdk.String("consectetur"),
                VMID: "molestias",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAsyncRequestStatus != nil {
        // handle response
    }
}
```

## BrowseVmwareSnapshot

For a virtual machine snapshot, list the directories and files that are beneath a specified file system path.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.BrowseVmwareSnapshot(ctx, operations.BrowseVmwareSnapshotRequest{
        ID: "4e239670-3fec-431c-9082-4d189a36a6b2",
        Limit: sdk.Int(814111),
        Offset: sdk.Int(170992),
        Path: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrowseResponseListResponse != nil {
        // handle response
    }
}
```

## BulkCreateOnDemandBackup

Bulk operation of taking on-demand snapshot for given virtual machines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.BulkCreateOnDemandBackup(ctx, shared.BulkOnDemandSnapshotJobConfig{
        SLAID: sdk.String("repudiandae"),
        Vms: []string{
            "esse",
            "accusantium",
            "nihil",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateDownloadFileJob

Create a request to download a file from a virtual machine snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateDownloadFileJob(ctx, operations.CreateDownloadFileJobRequest{
        DownloadFileJobConfig: shared.DownloadFileJobConfig{
            LegalHoldDownloadConfig: &shared.LegalHoldDownloadConfig{
                IsLegalHoldDownload: false,
            },
            Path: "similique",
        },
        ID: "a60c8fe4-6e61-477d-b9db-3b70ffbb6970",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateDownloadSnapshotFromCloud

Provides a method for retrieving a snapshot, that is not available locally, from an archival location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateDownloadSnapshotFromCloud(ctx, operations.CreateDownloadSnapshotFromCloudRequest{
        ID: "ee770e36-097e-4f7c-a06e-61b0d308714c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateExportV1

Export a virtual machine from a snapshot, using a specified hypervisor host as the datastore.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateExportV1(ctx, operations.CreateExportV1Request{
        ExportSnapshotJobConfigV1: shared.ExportSnapshotJobConfigV1{
            DatastoreID: "consequuntur",
            DisableNetwork: sdk.Bool(false),
            HostID: sdk.String("perferendis"),
            KeepMacAddresses: sdk.Bool(false),
            PowerOn: sdk.Bool(false),
            RemoveNetworkDevices: sdk.Bool(false),
            ShouldRecoverTags: sdk.Bool(false),
            UnregisterVM: sdk.Bool(false),
            VMName: sdk.String("est"),
        },
        ID: "3d98637c-a85c-43fe-a557-4dbaf94a7c98",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateExportWithDownloadFromCloudV1

Download a snapshot from an archival location and then export a virtual machine using the downloaded snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateExportWithDownloadFromCloudV1(ctx, operations.CreateExportWithDownloadFromCloudV1Request{
        ExportSnapshotJobConfigV1: shared.ExportSnapshotJobConfigV1{
            DatastoreID: "a",
            DisableNetwork: sdk.Bool(false),
            HostID: sdk.String("illo"),
            KeepMacAddresses: sdk.Bool(false),
            PowerOn: sdk.Bool(false),
            RemoveNetworkDevices: sdk.Bool(false),
            ShouldRecoverTags: sdk.Bool(false),
            UnregisterVM: sdk.Bool(false),
            VMName: sdk.String("velit"),
        },
        ID: "af28db2c-f2bf-44f3-9ed3-56d7e14b21cd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateInstantRecovery

Instantly recovery a virtual machine from a snapshot. The Instant Recovery request starts the virtual machine with networking enabled and renames and powers off the source virtual machine, if it still exists.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateInstantRecovery(ctx, operations.CreateInstantRecoveryRequest{
        InstantRecoveryJobConfig: shared.InstantRecoveryJobConfig{
            DisableNetwork: sdk.Bool(false),
            HostID: sdk.String("occaecati"),
            KeepMacAddresses: sdk.Bool(false),
            PowerOn: sdk.Bool(false),
            PreserveMoid: sdk.Bool(false),
            RemoveNetworkDevices: sdk.Bool(false),
            ShouldRecoverTags: sdk.Bool(false),
            Vlan: sdk.Int(531763),
            VMName: sdk.String("beatae"),
        },
        ID: "96d55af6-9a1c-44b7-9ae3-3681c23c39a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateMountV1

Create a request to Live Mount a virtual machine from a snapshot using a specified configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateMountV1(ctx, operations.CreateMountV1Request{
        MountSnapshotJobConfigV1: &shared.MountSnapshotJobConfigV1{
            CreateDatastoreOnly: sdk.Bool(false),
            DataStoreName: sdk.String("porro"),
            DisableNetwork: sdk.Bool(false),
            HostID: sdk.String("consequatur"),
            KeepMacAddresses: sdk.Bool(false),
            PowerOn: sdk.Bool(false),
            RemoveNetworkDevices: sdk.Bool(false),
            ShouldRecoverTags: sdk.Bool(false),
            Vlan: sdk.Int(886365),
            VMName: sdk.String("ab"),
        },
        ID: "7cb12c5b-a825-4fe2-acd5-cba6fbfec932",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateOnDemandBackup

Use the ID of a virtual machine to create an on-demand snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateOnDemandBackup(ctx, operations.CreateOnDemandBackupRequest{
        BaseOnDemandSnapshotConfig: &shared.BaseOnDemandSnapshotConfig{
            SLAID: sdk.String("fuga"),
        },
        ID: "f6813d65-bfec-4ec2-9d69-16f7fc7dda70",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateRestoreFileJob

Create a request to restore a file or folder to the source virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateRestoreFileJob(ctx, operations.CreateRestoreFileJobRequest{
        RestoreFileJobConfig: shared.RestoreFileJobConfig{
            DomainName: sdk.String("recusandae"),
            IgnoreErrors: sdk.Bool(false),
            Password: sdk.String("placeat"),
            Path: "aliquid",
            RestorePath: "sit",
            ShouldRestoreXAttrs: sdk.Bool(false),
            ShouldSaveCredentials: sdk.Bool(false),
            ShouldUseAgent: sdk.Bool(false),
            Username: sdk.String("Shakira44"),
        },
        ID: "5894d61c-14cd-4902-a7e3-7c0d977f1a54",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateUnmount

Create a request to delete a Live Mount virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.CreateUnmount(ctx, operations.CreateUnmountRequest{
        Force: sdk.Bool(false),
        ID: "91abe975-1b10-46d2-be03-e69815aae99f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteVmwareSnapshot

Designate a snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a virtual machine that is not assigned to an SLA Domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.DeleteVmwareSnapshot(ctx, operations.DeleteVmwareSnapshotRequest{
        ID: "cde9e729-c9d4-4f2d-8a44-640ca60db73a",
        Location: operations.DeleteVmwareSnapshotLocationEnumAll,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVmwareSnapshots

Delete all of the snapshots from a virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.DeleteVmwareSnapshots(ctx, operations.DeleteVmwareSnapshotsRequest{
        ID: "f93f467d-c0d8-4da5-a122-026ab8f27748",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAsyncRequestStatus

Get the details of an asynchronous request that involves a VMware virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetAsyncRequestStatus(ctx, operations.GetAsyncRequestStatusRequest{
        ID: "5c1976af-980d-4a7a-889f-c44db274530e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetMountV1

Retrieve detailed information for a specified Live Mount.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetMountV1(ctx, operations.GetMountV1Request{
        ID: "5cc7c6d0-cbcf-4dcd-b34b-6f623bcecab5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareVMMountDetailV1 != nil {
        // handle response
    }
}
```

## GetSnapshot

Retrieve detailed information about a virtual machine snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetSnapshot(ctx, operations.GetSnapshotRequest{
        ID: "0aee5e0d-a8b9-4af6-ad05-486e7b413cbe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VMSnapshotDetail != nil {
        // handle response
    }
}
```

## GetVirtualDisk

Detailed about the specific Virtual Disk.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVirtualDisk(ctx, operations.GetVirtualDiskRequest{
        ID: "2d176dc1-c43d-440f-a1d1-71157cbe5ee4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualDiskDetail != nil {
        // handle response
    }
}
```

## GetVM

Retrieve details for a virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVM(ctx, operations.GetVMRequest{
        ID: "f7211840-772f-432e-bb49-dbe0f23b7b6d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualMachineDetail != nil {
        // handle response
    }
}
```

## GetVMForceFullSpec

Retrieve the configuration that has been set for forcing a full snapshot for a VMware virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVMForceFullSpec(ctx, operations.GetVMForceFullSpecRequest{
        ID: "9948d6ed-ed47-4768-8fc7-a17a82e5e82f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VMForceFullResponse != nil {
        // handle response
    }
}
```

## GetVmwareCdpLiveInfo

Returns the live CDP info for a set of CDP-enabled virtual machines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareCdpLiveInfo(ctx, []string{
        "consequuntur",
        "praesentium",
        "fugiat",
        "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchVmwareCdpLiveInfo != nil {
        // handle response
    }
}
```

## GetVmwareCdpStateInfo

Returns CDP state info for a set of virtual machines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareCdpStateInfo(ctx, []string{
        "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchVmwareCdpStateInfo != nil {
        // handle response
    }
}
```

## GetVmwareMissedRecoverableRanges

Gets a list of time ranges to which a CDP-enabled virtual machine cannot perform a point-in-time recovery. The time ranges are indicated by start and end timestamps listed as date-time strings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareMissedRecoverableRanges(ctx, operations.GetVmwareMissedRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2022-04-25T06:21:18.833Z"),
        BeforeTime: types.MustTimeFromString("2022-02-08T21:31:08.156Z"),
        ID: "91392ab4-4cb1-4835-808f-461ce53e9144",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareRecoverableRangeListResponse != nil {
        // handle response
    }
}
```

## GetVmwareRecoverableRanges

Gets time ranges available for point-in-time recovery. The time ranges are indicated by start and end date-time strings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareRecoverableRanges(ctx, operations.GetVmwareRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2021-12-12T20:54:41.368Z"),
        BeforeTime: types.MustTimeFromString("2021-10-10T12:36:35.161Z"),
        ID: "ba460add-fde4-410c-b7da-a9182a49d962",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareRecoverableRangeListResponse != nil {
        // handle response
    }
}
```

## GetVmwareVMMissedRecoverableRangesInBatch

Returns the recoverable ranges that were missed for a set of CDP-enabled virtual machines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareVMMissedRecoverableRangesInBatch(ctx, shared.BatchVmwareVMMissedRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2022-02-19T07:08:52.403Z"),
        BeforeTime: types.MustTimeFromString("2022-03-31T23:22:48.134Z"),
        VMIds: []string{
            "delectus",
            "reiciendis",
            "minus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchVmwareVMMissedRecoverableRanges != nil {
        // handle response
    }
}
```

## GetVmwareVMRecoverableRangesInBatch

Returns the recoverable ranges for a set of CDP-enabled virtual machines

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.GetVmwareVMRecoverableRangesInBatch(ctx, shared.BatchVmwareVMRecoverableRangesRequest{
        AfterTime: types.MustTimeFromString("2022-06-02T09:06:48.715Z"),
        BeforeTime: types.MustTimeFromString("2021-03-02T11:13:28.177Z"),
        VMIds: []string{
            "animi",
            "modi",
            "quaerat",
            "quis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchVmwareVMRecoverableRanges != nil {
        // handle response
    }
}
```

## MissedSnapshots

Retrieve details about the missed snapshots for a virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.MissedSnapshots(ctx, operations.MissedSnapshotsRequest{
        ID: "2792bcd4-40ea-498b-acce-0486de0d56d7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```

## QueryMountV1

Retrieve summary information about Live Mount activity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.QueryMountV1(ctx, operations.QueryMountV1Request{
        Limit: sdk.Int(249335),
        Offset: sdk.Int(717148),
        VMID: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareVMMountSummaryV1ListResponse != nil {
        // handle response
    }
}
```

## QuerySnapshot

Retrieve summary information for the snapshots of a virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.QuerySnapshot(ctx, operations.QuerySnapshotRequest{
        ID: "05503e8d-c626-4ff7-bc65-675f5b70e3e4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VMSnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QuerySnapshotsForVms

Retrieve snapshot summaries for a list of virtual machines.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.QuerySnapshotsForVms(ctx, []string{
        "sapiente",
        "porro",
        "impedit",
        "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchVMSnapshotSummaries != nil {
        // handle response
    }
}
```

## QueryVM

Get summary of all the VMs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.QueryVM(ctx, operations.QueryVMRequest{
        EffectiveSLADomainID: sdk.String("dolorum"),
        GuestOsName: sdk.String("cupiditate"),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(69650),
        Moid: sdk.String("necessitatibus"),
        Name: sdk.String("Jerome Davis"),
        Offset: sdk.Int(265082),
        PrimaryClusterID: sdk.String("at"),
        SLAAssignment: operations.QueryVMSLAAssignmentEnumDerived.ToPointer(),
        SortBy: operations.QueryVMSortByEnumEffectiveSLADomainName.ToPointer(),
        SortOrder: operations.QueryVMSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualMachineSummaryListResponse != nil {
        // handle response
    }
}
```

## RelocateMount

Run storage VMotion to relocate a specified Live Mount into another data store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.RelocateMount(ctx, operations.RelocateMountRequest{
        RelocateMountConfig: shared.RelocateMountConfig{
            DatastoreID: "quae",
        },
        ID: "4ef45cea-11ac-453e-bb65-87f340414c5b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## RequestVMForceFullSnapshot

Request a full snapshot to be taken for the next backup job of a VMware virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.RequestVMForceFullSnapshot(ctx, operations.RequestVMForceFullSnapshotRequest{
        VMForceFullRequest: shared.VMForceFullRequest{
            VirtualDiskInfos: []shared.VmwareVdiskForceFullInfo{
                shared.VmwareVdiskForceFullInfo{
                    ShouldDedupe: false,
                    VirtualDiskID: "est",
                },
                shared.VmwareVdiskForceFullInfo{
                    ShouldDedupe: false,
                    VirtualDiskID: "quod",
                },
                shared.VmwareVdiskForceFullInfo{
                    ShouldDedupe: false,
                    VirtualDiskID: "voluptates",
                },
            },
        },
        ID: "e400ae9f-92ca-4f1b-825f-1d14718c6fa2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VMForceFullResponse != nil {
        // handle response
    }
}
```

## RunGuestOsScript

Run the specified preBackup, postSnap, or postBackup script in the guest OS of a virtual machine. The script must exist and meet requirements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.RunGuestOsScript(ctx, operations.RunGuestOsScriptRequest{
        VMGuestScriptRunConfig: shared.VMGuestScriptRunConfig{
            Phase: shared.VMGuestScriptRunConfigPhaseEnumPostBackup,
        },
        ID: "ad0c06c5-d954-472c-9d14-fc43b70bca88",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchVM

Search for a file in the snapshots of a a virtual machine. Specify the file by full path prefix or filename prefix.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.SearchVM(ctx, operations.SearchVMRequest{
        Cursor: sdk.String("reiciendis"),
        ID: "a70c4335-1c3d-4d1e-b8f7-f75f4f23f1c0",
        Limit: sdk.Int(625806),
        Path: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponseListResponse != nil {
        // handle response
    }
}
```

## UpdateMount

Power a specified Live Mount virtual machine on or off. Pass **_true_** to power the virtual machine on and pass **_false_** to power the virtual machine off.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.UpdateMount(ctx, operations.UpdateMountRequest{
        UpdateMountConfig: shared.UpdateMountConfig{
            PowerStatus: false,
            ShouldForce: sdk.Bool(false),
        },
        ID: "86c3ae7d-7b67-4fee-b5e1-42d95b1dbece",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareVMMountDetailV1 != nil {
        // handle response
    }
}
```

## UpdateVirtualDisk

Update a specific Virtual Disk.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.UpdateVirtualDisk(ctx, operations.UpdateVirtualDiskRequest{
        VirtualDiskUpdate: shared.VirtualDiskUpdate{
            ExcludeFromSnapshots: sdk.Bool(false),
        },
        ID: "ff7c4b15-6e92-4782-b5ee-a76817468063",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualDiskDetail != nil {
        // handle response
    }
}
```

## UpdateVM

Update a virtual machine with specified properties. Use the guestCredential field to update the guest credential for a specified virtual machine.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.UpdateVM(ctx, operations.UpdateVMRequest{
        VirtualMachineUpdateWithSecret: shared.VirtualMachineUpdateWithSecret{
            CloudInstantiationSpec: &shared.CloudInstantiationSpec{
                ImageRetentionInSeconds: 949051,
            },
            ConfiguredSLADomainID: sdk.String("ducimus"),
            GuestCredential: &shared.BaseGuestCredential{
                Password: "perspiciatis",
                Username: "Kurt_Quigley",
            },
            IsArrayIntegrationEnabled: sdk.Bool(false),
            IsVMPaused: sdk.Bool(false),
            MaxNestedVsphereSnapshots: sdk.Int(363893),
            PostBackupScript: &shared.VirtualMachineScriptDetail{
                FailureHandling: shared.VirtualMachineScriptDetailFailureHandlingEnumAbort,
                ScriptPath: "maxime",
                TimeoutMs: 61338,
            },
            PostSnapScript: &shared.VirtualMachineScriptDetail{
                FailureHandling: shared.VirtualMachineScriptDetailFailureHandlingEnumContinue,
                ScriptPath: "voluptatem",
                TimeoutMs: 945421,
            },
            PreBackupScript: &shared.VirtualMachineScriptDetail{
                FailureHandling: shared.VirtualMachineScriptDetailFailureHandlingEnumContinue,
                ScriptPath: "voluptatem",
                TimeoutMs: 694844,
            },
            ShouldRefreshCacheAfterUpdate: sdk.Bool(false),
            SnapshotConsistencyMandate: shared.VirtualMachineUpdateWithSecretSnapshotConsistencyMandateEnumVssConsistent.ToPointer(),
            ThrottlingSettings: &shared.VmwareAdaptiveThrottlingSettings{
                CPUUtilizationThreshold: sdk.Int(179904),
                DatastoreIoLatencyThreshold: sdk.Int(61375),
                IoLatencyThreshold: sdk.Int(633569),
            },
        },
        ID: "40e7c4ae-6406-4427-a657-b01a07c08fd3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualMachineDetail != nil {
        // handle response
    }
}
```

## VMMakePrimary

Migrate the primary cluster with which the agent is able to communicate. For disaster recovery when migrating everything over from another cluster, the /host/make_primary endpoint can be used with the oldPrimaryClusterUuid parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.VMMakePrimary(ctx, []string{
        "magni",
        "inventore",
        "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## VMRegisterAgent

Register the Rubrik Backup Service that is running on a specified host with the specified Rubrik cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareVM.VMRegisterAgent(ctx, operations.VMRegisterAgentRequest{
        ID: "257930d6-f093-4a3e-ba46-d366dfa1011a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
