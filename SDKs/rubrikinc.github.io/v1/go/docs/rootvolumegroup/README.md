# RootVolumeGroup

## Overview

Volume Groups.

### Available Operations

* [CreateOnDemandVolumeGroupBackup](#createondemandvolumegroupbackup) - Create on-demand snapshot for the Volume Group
* [GetVolumeGroup](#getvolumegroup) - Get Volume Group details
* [GetVolumeGroupForceFullSpec](#getvolumegroupforcefullspec) - Retrieve the configuration for forcing a full snapshot
* [GetVolumeGroupSnapshot](#getvolumegroupsnapshot) - Get Volume Group snapshot details
* [GetVolumeGroupSnapshotMount](#getvolumegroupsnapshotmount) - Get summary information for a mount
* [PatchVolumeGroup](#patchvolumegroup) - Update Volume Group properties
* [QueryVolumeGroup](#queryvolumegroup) - Get list of Volume Groups
* [QueryVolumeGroupLatestSnapshot](#queryvolumegrouplatestsnapshot) - Get the latest snapshot of the Volume Group
* [QueryVolumeGroupSnapshot](#queryvolumegroupsnapshot) - Get list of snapshots of the Volume Group
* [QueryVolumeGroupSnapshotMount](#queryvolumegroupsnapshotmount) - Get summary information for all mounts
* [RequestVolumeGroupForceFullSnapshot](#requestvolumegroupforcefullsnapshot) - Request a full snapshot on the next backup job of a Volume Group

## CreateOnDemandVolumeGroupBackup

Create an on-demand snapshot for the given Volume Group ID.

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
    res, err := s.RootVolumeGroup.CreateOnDemandVolumeGroupBackup(ctx, operations.CreateOnDemandVolumeGroupBackupRequest{
        VolumeGroupOnDemandSnapshotConfig: &shared.VolumeGroupOnDemandSnapshotConfig{
            SLAID: sdk.String("voluptatem"),
            VolumeIdsIncludedInSnapshot: []string{
                "et",
                "cum",
                "dolor",
            },
        },
        ID: "ec8b5386-2de1-4a9d-94fe-72e521f90303",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetVolumeGroup

Detailed view of a Volume Group.

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
    res, err := s.RootVolumeGroup.GetVolumeGroup(ctx, operations.GetVolumeGroupRequest{
        ID: "dfc33839-7fff-4a6d-9d32-090fc157ac9f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupDetail != nil {
        // handle response
    }
}
```

## GetVolumeGroupForceFullSpec

Retrieve the configuration for forcing a full snapshot for a Volume Group.

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
    res, err := s.RootVolumeGroup.GetVolumeGroupForceFullSpec(ctx, operations.GetVolumeGroupForceFullSpecRequest{
        ID: "e1961ce9-be41-4c86-9dd7-d9719d07b200",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupForceFullResponse != nil {
        // handle response
    }
}
```

## GetVolumeGroupSnapshot

Retrieve detailed information about a snapshot.

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
    res, err := s.RootVolumeGroup.GetVolumeGroupSnapshot(ctx, operations.GetVolumeGroupSnapshotRequest{
        ID: "a58ffd29-67df-48fd-882a-8e60be620cd9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupSnapshotSummary != nil {
        // handle response
    }
}
```

## GetVolumeGroupSnapshotMount

Retrieve information on a Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (The ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (the mounted volumes information), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that intiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

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
    res, err := s.RootVolumeGroup.GetVolumeGroupSnapshotMount(ctx, operations.GetVolumeGroupSnapshotMountRequest{
        ID: "c5afdd04-c375-4251-abea-e1d87ecc5fdc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupMountSummary != nil {
        // handle response
    }
}
```

## PatchVolumeGroup

Patch Volume Group with specified properties.

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
    res, err := s.RootVolumeGroup.PatchVolumeGroup(ctx, operations.PatchVolumeGroupRequest{
        VolumeGroupPatch: shared.VolumeGroupPatch{
            ConfiguredSLADomainID: sdk.String("saepe"),
            ForceFull: sdk.Bool(false),
            IsPaused: sdk.Bool(false),
            VolumeIdsIncludedInSnapshots: []string{
                "deleniti",
                "eveniet",
                "molestiae",
            },
        },
        ID: "a8831166-2cda-46d7-bc1d-86066237d422",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupDetail != nil {
        // handle response
    }
}
```

## QueryVolumeGroup

Get summary of all Volume Groups.

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
    res, err := s.RootVolumeGroup.QueryVolumeGroup(ctx, operations.QueryVolumeGroupRequest{
        EffectiveSLADomainID: sdk.String("molestiae"),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(500133),
        Name: sdk.String("Beth Sporer"),
        Offset: sdk.Int(634481),
        PrimaryClusterID: sdk.String("molestiae"),
        SLAAssignment: operations.QueryVolumeGroupSLAAssignmentEnumDerived.ToPointer(),
        SortBy: operations.QueryVolumeGroupSortByEnumEffectiveSLADomainName.ToPointer(),
        SortOrder: operations.QueryVolumeGroupSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryVolumeGroupLatestSnapshot

Retrieve the latest snapshot summary of a Volume Group.

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
    res, err := s.RootVolumeGroup.QueryVolumeGroupLatestSnapshot(ctx, operations.QueryVolumeGroupLatestSnapshotRequest{
        ID: "3984511c-c75e-44f0-8004-b5bb758cc945",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupSnapshotSummaries != nil {
        // handle response
    }
}
```

## QueryVolumeGroupSnapshot

Retrieve snapshot details for a Volume Group.

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
    res, err := s.RootVolumeGroup.QueryVolumeGroupSnapshot(ctx, operations.QueryVolumeGroupSnapshotRequest{
        ID: "62f00696-85fc-4d1a-973d-84bbe24f2983",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupSnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryVolumeGroupSnapshotMount

Retrieves information for each Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (the ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (information on the mounted volumes), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that initiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

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
    res, err := s.RootVolumeGroup.QueryVolumeGroupSnapshotMount(ctx, operations.QueryVolumeGroupSnapshotMountRequest{
        Limit: sdk.Int(299592),
        Offset: sdk.Int(648495),
        SortBy: operations.QueryVolumeGroupSnapshotMountSortByEnumMountedDate.ToPointer(),
        SortOrder: operations.QueryVolumeGroupSnapshotMountSortOrderEnumDesc.ToPointer(),
        SourceHostName: sdk.String("doloremque"),
        SourceVolumeGroupID: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupMountSummaryListResponse != nil {
        // handle response
    }
}
```

## RequestVolumeGroupForceFullSnapshot

Request a full snapshot to be taken during the next backup job of a Volume Group.

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
    res, err := s.RootVolumeGroup.RequestVolumeGroupForceFullSnapshot(ctx, operations.RequestVolumeGroupForceFullSnapshotRequest{
        VolumeGroupForceFullRequest: shared.VolumeGroupForceFullRequest{
            VolumeInfos: []shared.ForceFullVolumeInfo{
                shared.ForceFullVolumeInfo{
                    ShouldDedupe: false,
                    VolumeID: "corporis",
                },
            },
        },
        ID: "cb6285d4-a29a-4aa1-a169-156f7d2ee209",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeGroupForceFullResponse != nil {
        // handle response
    }
}
```
