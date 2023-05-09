# Scores

### Available Operations

* [GamesManagementScoresReset](#gamesmanagementscoresreset) - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementScoresResetAll](#gamesmanagementscoresresetall) - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementScoresResetAllForAllPlayers](#gamesmanagementscoresresetallforallplayers) - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* [GamesManagementScoresResetForAllPlayers](#gamesmanagementscoresresetforallplayers) - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* [GamesManagementScoresResetMultipleForAllPlayers](#gamesmanagementscoresresetmultipleforallplayers) - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

## GamesManagementScoresReset

Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Scores.GamesManagementScoresReset(ctx, operations.GamesManagementScoresResetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        LeaderboardID: "excepturi",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.GamesManagementScoresResetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerScoreResetResponse != nil {
        // handle response
    }
}
```

## GamesManagementScoresResetAll

Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Scores.GamesManagementScoresResetAll(ctx, operations.GamesManagementScoresResetAllRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.GamesManagementScoresResetAllSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerScoreResetAllResponse != nil {
        // handle response
    }
}
```

## GamesManagementScoresResetAllForAllPlayers

Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.

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
    res, err := s.Scores.GamesManagementScoresResetAllForAllPlayers(ctx, operations.GamesManagementScoresResetAllForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.GamesManagementScoresResetAllForAllPlayersSecurity{
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

## GamesManagementScoresResetForAllPlayers

Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.

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
    res, err := s.Scores.GamesManagementScoresResetForAllPlayers(ctx, operations.GamesManagementScoresResetForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        LeaderboardID: "fugit",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.GamesManagementScoresResetForAllPlayersSecurity{
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

## GamesManagementScoresResetMultipleForAllPlayers

Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

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
    res, err := s.Scores.GamesManagementScoresResetMultipleForAllPlayers(ctx, operations.GamesManagementScoresResetMultipleForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScoresResetMultipleForAllRequest: &shared.ScoresResetMultipleForAllRequest{
            Kind: sdk.String("labore"),
            LeaderboardIds: []string{
                "eum",
                "non",
                "eligendi",
                "sint",
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sint"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.GamesManagementScoresResetMultipleForAllPlayersSecurity{
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
