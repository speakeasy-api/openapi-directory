# Snapshots

### Available Operations

* [GamesSnapshotsGet](#gamessnapshotsget) - Retrieves the metadata for a given snapshot ID.
* [GamesSnapshotsList](#gamessnapshotslist) - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

## GamesSnapshotsGet

Retrieves the metadata for a given snapshot ID.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Snapshots.GamesSnapshotsGet(ctx, operations.GamesSnapshotsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("qui"),
        Key: sdk.String("dolorum"),
        Language: sdk.String("a"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        SnapshotID: "iusto",
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.GamesSnapshotsGetSecurity{
        Option1: &operations.GamesSnapshotsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Snapshot != nil {
        // handle response
    }
}
```

## GamesSnapshotsList

Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Snapshots.GamesSnapshotsList(ctx, operations.GamesSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("enim"),
        Language: sdk.String("dolorem"),
        MaxResults: sdk.Int64(957451),
        OauthToken: sdk.String("totam"),
        PageToken: sdk.String("nihil"),
        PlayerID: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("sed"),
    }, operations.GamesSnapshotsListSecurity{
        Option1: &operations.GamesSnapshotsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotListResponse != nil {
        // handle response
    }
}
```
