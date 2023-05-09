# RootLegalHold

## Overview

Legal Hold.

### Available Operations

* [ApplyLegalHold](#applylegalhold) - Apply a Legal Hold
* [DissolveLegalHoldSnapshots](#dissolvelegalholdsnapshots) - Dissolve a collection of snapshots of specified data source from Legal Hold
* [GetLegalHoldObjects](#getlegalholdobjects) - Get objects part of Legal Hold
* [QueryLegalHold](#querylegalhold) - Get snasphots held under legal hold

## ApplyLegalHold

Places a snapshot on legal hold by specifying the hold requirements.

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
    res, err := s.RootLegalHold.ApplyLegalHold(ctx, shared.ApplyLegalHoldDefinition{
        HoldConfig: shared.HoldConfig{
            IsHoldInPlace: sdk.Bool(false),
        },
        SnapshotID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalHoldSummary != nil {
        // handle response
    }
}
```

## DissolveLegalHoldSnapshots

Dissolve a collection of snapshots of specified data source from Legal Hold.

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
    res, err := s.RootLegalHold.DissolveLegalHoldSnapshots(ctx, operations.DissolveLegalHoldSnapshotsRequest{
        DissolveLegalHoldDefinition: shared.DissolveLegalHoldDefinition{
            SnapshotIds: []string{
                "eligendi",
            },
        },
        ID: "9b2ad32d-afe8-41a8-8f44-44573fecd473",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DissolveLegalHoldResponse != nil {
        // handle response
    }
}
```

## GetLegalHoldObjects

Returns the object details for object with snapshots under legal hold.

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
    res, err := s.RootLegalHold.GetLegalHoldObjects(ctx, operations.GetLegalHoldObjectsRequest{
        Limit: sdk.Int(367251),
        ObjectID: sdk.String("nesciunt"),
        ObjectName: sdk.String("earum"),
        ObjectType: sdk.String("eum"),
        Offset: sdk.Int(222373),
        SortBy: operations.GetLegalHoldObjectsSortByEnumNumberOfSnapshotsHeld.ToPointer(),
        SortOrder: operations.GetLegalHoldObjectsSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectHoldSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryLegalHold

Get summary for snapshots under legal hold. If object_id is passed, return summary information only for snapshots of the object under legal hold else return summary for all snapshots under legal hold.

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
    res, err := s.RootLegalHold.QueryLegalHold(ctx, operations.QueryLegalHoldRequest{
        AfterDate: types.MustTimeFromString("2022-12-12T02:35:45.315Z"),
        BeforeDate: types.MustTimeFromString("2022-08-14T10:08:14.135Z"),
        Limit: sdk.Int(472290),
        ObjectID: sdk.String("unde"),
        ObjectName: sdk.String("deserunt"),
        ObjectType: sdk.String("id"),
        Offset: sdk.Int(403485),
        PlacedOnHoldAfterDate: types.MustTimeFromString("2021-06-25T07:54:53.444Z"),
        PlacedOnHoldBeforeDate: types.MustTimeFromString("2022-01-14T11:55:19.476Z"),
        SnapshotType: operations.QueryLegalHoldSnapshotTypeEnumUnprotected.ToPointer(),
        SortBy: operations.QueryLegalHoldSortByEnumSnapshotType.ToPointer(),
        SortOrder: operations.QueryLegalHoldSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalHoldSummaryListResponse != nil {
        // handle response
    }
}
```
