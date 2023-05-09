# Players

### Available Operations

* [GamesPlayersGet](#gamesplayersget) - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* [GamesPlayersGetMultipleApplicationPlayerIds](#gamesplayersgetmultipleapplicationplayerids) - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* [GamesPlayersGetScopedPlayerIds](#gamesplayersgetscopedplayerids) - Retrieves scoped player identifiers for currently authenticated user.
* [GamesPlayersList](#gamesplayerslist) - Get the collection of players for the currently authenticated user.

## GamesPlayersGet

Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.

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
    res, err := s.Players.GamesPlayersGet(ctx, operations.GamesPlayersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        Language: sdk.String("sed"),
        OauthToken: sdk.String("saepe"),
        PlayerID: "pariatur",
        PlayerIDConsistencyToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
    }, operations.GamesPlayersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
        // handle response
    }
}
```

## GamesPlayersGetMultipleApplicationPlayerIds

Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.

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
    res, err := s.Players.GamesPlayersGetMultipleApplicationPlayerIds(ctx, operations.GamesPlayersGetMultipleApplicationPlayerIdsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationIds: []string{
            "pariatur",
            "maxime",
            "ea",
            "excepturi",
        },
        Callback: sdk.String("odit"),
        Fields: sdk.String("ea"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.GamesPlayersGetMultipleApplicationPlayerIdsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMultipleApplicationPlayerIdsResponse != nil {
        // handle response
    }
}
```

## GamesPlayersGetScopedPlayerIds

Retrieves scoped player identifiers for currently authenticated user.

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
    res, err := s.Players.GamesPlayersGetScopedPlayerIds(ctx, operations.GamesPlayersGetScopedPlayerIdsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.GamesPlayersGetScopedPlayerIdsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScopedPlayerIds != nil {
        // handle response
    }
}
```

## GamesPlayersList

Get the collection of players for the currently authenticated user.

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
    res, err := s.Players.GamesPlayersList(ctx, operations.GamesPlayersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Collection: operations.GamesPlayersListCollectionEnumFriendsAll,
        Fields: sdk.String("nobis"),
        Key: sdk.String("dolores"),
        Language: sdk.String("quis"),
        MaxResults: sdk.Int64(521037),
        OauthToken: sdk.String("dignissimos"),
        PageToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.GamesPlayersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerListResponse != nil {
        // handle response
    }
}
```
