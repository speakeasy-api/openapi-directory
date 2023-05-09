# Leaderboards

### Available Operations

* [GamesLeaderboardsGet](#gamesleaderboardsget) - Retrieves the metadata of the leaderboard with the given ID.
* [GamesLeaderboardsList](#gamesleaderboardslist) - Lists all the leaderboard metadata for your application.

## GamesLeaderboardsGet

Retrieves the metadata of the leaderboard with the given ID.

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
    res, err := s.Leaderboards.GamesLeaderboardsGet(ctx, operations.GamesLeaderboardsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Key: sdk.String("natus"),
        Language: sdk.String("omnis"),
        LeaderboardID: "molestiae",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.GamesLeaderboardsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Leaderboard != nil {
        // handle response
    }
}
```

## GamesLeaderboardsList

Lists all the leaderboard metadata for your application.

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
    res, err := s.Leaderboards.GamesLeaderboardsList(ctx, operations.GamesLeaderboardsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        Language: sdk.String("eum"),
        MaxResults: sdk.Int64(878453),
        OauthToken: sdk.String("aspernatur"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.GamesLeaderboardsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardListResponse != nil {
        // handle response
    }
}
```
