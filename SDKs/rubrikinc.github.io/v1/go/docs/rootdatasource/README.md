# RootDataSource

## Overview

Data Sources.

### Available Operations

* [BulkDeleteSnapshots](#bulkdeletesnapshots) - Bulk delete all snapshots for the given objects
* [BulkDeleteSnapshotsForObject](#bulkdeletesnapshotsforobject) - Bulk delete specified snapshots for the given object
* [ExpiredCustomRetentionSnapshots](#expiredcustomretentionsnapshots) - Returns a list of snapshots that have expired according to their snapshot-level SLA Domain assignments


## BulkDeleteSnapshots

This endpoint deletes all snapshots from all locations for the objects with the IDs specified by the 'objectIds' parameter. API returning success does not guarantee that the snapshots will be expired.


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
    res, err := s.RootDataSource.BulkDeleteSnapshots(ctx, shared.BulkDeleteSnapshotsConfig{
        ObjectIds: []string{
            "repellat",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BulkDeleteSnapshotsForObject

Bulk deletion of the snapshots specified by a list of snapshot IDs for a given object. Object type is required. Location ID is optional. API returning success does not guarantee that the snapshot will be expired.


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
    res, err := s.RootDataSource.BulkDeleteSnapshotsForObject(ctx, operations.BulkDeleteSnapshotsForObjectRequest{
        BulkDeleteObjectSnapshotsConfig: shared.BulkDeleteObjectSnapshotsConfig{
            LocationID: sdk.String("explicabo"),
            SnapshotIds: []string{
                "exercitationem",
            },
        },
        ID: "7411faf4-b754-44e4-b2e8-02857a5b4046",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExpiredCustomRetentionSnapshots

Gets a list of the snapshots of a specified data source that have expired according to the snapshot-level SLA Domain assignments. This list does not include remote snapshots.


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
    res, err := s.RootDataSource.ExpiredCustomRetentionSnapshots(ctx, operations.ExpiredCustomRetentionSnapshotsRequest{
        ID: "3a7d575f-1400-4e76-8ad7-334ec1b781b3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpiredCustomRetentionSnapshots != nil {
        // handle response
    }
}
```
