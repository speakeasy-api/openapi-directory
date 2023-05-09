# RootUnmanagedObject

## Overview

Unmanaged Objects.

### Available Operations

* [AssignToRetentionSLAAsync](#assigntoretentionslaasync) - Assign relic/unmanaged entities to an SLA Domain for managing retention asynchronously
* [BulkTierExistingSnapshots](#bulktierexistingsnapshots) - Bulk tier existing snapshots to cold storage
* [QueryUnmanagedObjectSnapshotsV1](#queryunmanagedobjectsnapshotsv1) - Get summary of all the snapshots for a given object
* [QueryUnmanagedObjectV1](#queryunmanagedobjectv1) - Get summary of all the objects with unmanaged snapshots
* [QueryUnmanagedReaderObject](#queryunmanagedreaderobject) - Get summary of all unmanaged reader objects

## AssignToRetentionSLAAsync

Assign relic/unmanaged entities to the specified SLA Domain for managing retention. The assignment event runs asynchronously.

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
    res, err := s.RootUnmanagedObject.AssignToRetentionSLAAsync(ctx, shared.UnmanagedObjectSLAAssignmentInfo{
        ManagedIds: []string{
            "at",
            "culpa",
        },
        ShouldApplyToNonPolicySnapshots: sdk.Bool(false),
        SLADomainID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedObjectPendingSLAInfos != nil {
        // handle response
    }
}
```

## BulkTierExistingSnapshots

Schedules a job to tier existing snapshots of the specified objects to cold storage.

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
    res, err := s.RootUnmanagedObject.BulkTierExistingSnapshots(ctx, shared.BulkTierSnapshotsConfig{
        LocationID: sdk.String("eos"),
        ObjectIds: []string{
            "quisquam",
            "dolor",
            "accusamus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## QueryUnmanagedObjectSnapshotsV1

Gets summary information for all snapshots of the object with the specified object ID.

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
    res, err := s.RootUnmanagedObject.QueryUnmanagedObjectSnapshotsV1(ctx, operations.QueryUnmanagedObjectSnapshotsV1Request{
        AfterDate: types.MustTimeFromString("2022-05-13T08:51:36.630Z"),
        BeforeDate: types.MustTimeFromString("2022-05-07T16:00:32.637Z"),
        ID: "1e30fda9-6648-49d7-b786-73e13a12a6b9",
        Limit: sdk.Int(568386),
        Offset: sdk.Int(146856),
        SearchValue: sdk.String("eius"),
        SnapshotType: operations.QueryUnmanagedObjectSnapshotsV1SnapshotTypeEnumPolicyBased.ToPointer(),
        SortBy: operations.QueryUnmanagedObjectSnapshotsV1SortByEnumSnapshotDateAndTime.ToPointer(),
        SortOrder: operations.QueryUnmanagedObjectSnapshotsV1SortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryUnmanagedObjectV1

Get summary of all the objects with unmanaged snapshots.

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
    res, err := s.RootUnmanagedObject.QueryUnmanagedObjectV1(ctx, operations.QueryUnmanagedObjectV1Request{
        AfterID: sdk.String("natus"),
        Limit: sdk.Int(255602),
        ObjectType: operations.QueryUnmanagedObjectV1ObjectTypeEnumShareFileset.ToPointer(),
        SearchValue: sdk.String("corrupti"),
        SortBy: operations.QueryUnmanagedObjectV1SortByEnumArchiveStorage.ToPointer(),
        SortOrder: operations.QueryUnmanagedObjectV1SortOrderEnumDesc.ToPointer(),
        UnmanagedStatus: operations.QueryUnmanagedObjectV1UnmanagedStatusEnumRelic.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnmanagedObjectDetailsListResponse != nil {
        // handle response
    }
}
```

## QueryUnmanagedReaderObject

A summary of all unmanaged objects recovered from reader archival locations.

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
    res, err := s.RootUnmanagedObject.QueryUnmanagedReaderObject(ctx, operations.QueryUnmanagedReaderObjectRequest{
        AfterID: sdk.String("cumque"),
        Limit: sdk.Int(510438),
        ObjectName: sdk.String("ut"),
        ObjectType: operations.QueryUnmanagedReaderObjectObjectTypeEnumWindowsFileset.ToPointer(),
        SortBy: operations.QueryUnmanagedReaderObjectSortByEnumArchiveStorage.ToPointer(),
        SortOrder: operations.QueryUnmanagedReaderObjectSortOrderEnumAsc.ToPointer(),
        UnmanagedStatus: operations.QueryUnmanagedReaderObjectUnmanagedStatusEnumUnprotected.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnmanagedObjectSummaryListResponse != nil {
        // handle response
    }
}
```
