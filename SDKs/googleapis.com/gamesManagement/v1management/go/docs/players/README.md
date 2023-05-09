# Players

### Available Operations

* [GamesManagementPlayersHide](#gamesmanagementplayershide) - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* [GamesManagementPlayersUnhide](#gamesmanagementplayersunhide) - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

## GamesManagementPlayersHide

Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

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
    res, err := s.Players.GamesManagementPlayersHide(ctx, operations.GamesManagementPlayersHideRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationID: "vero",
        Callback: sdk.String("nihil"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("ipsa"),
        PlayerID: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.GamesManagementPlayersHideSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GamesManagementPlayersUnhide

Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

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
    res, err := s.Players.GamesManagementPlayersUnhide(ctx, operations.GamesManagementPlayersUnhideRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApplicationID: "maiores",
        Callback: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        PlayerID: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.GamesManagementPlayersUnhideSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
