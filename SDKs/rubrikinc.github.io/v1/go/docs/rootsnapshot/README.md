# RootSnapshot

### Available Operations

* [GetSnapshotStorageStatsV1](#getsnapshotstoragestatsv1) - Returns storage stats for a snapshot

## GetSnapshotStorageStatsV1

Returns the storage statistics for a snapshot.

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
    res, err := s.RootSnapshot.GetSnapshotStorageStatsV1(ctx, operations.GetSnapshotStorageStatsV1Request{
        ID: "78ebb6e1-d2cf-4502-bafb-2cbc4635d5e6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotStorageStats != nil {
        // handle response
    }
}
```
