# Achievements

### Available Operations

* [GamesManagementAchievementsReset](#gamesmanagementachievementsreset) - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementAchievementsResetAll](#gamesmanagementachievementsresetall) - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementAchievementsResetAllForAllPlayers](#gamesmanagementachievementsresetallforallplayers) - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* [GamesManagementAchievementsResetForAllPlayers](#gamesmanagementachievementsresetforallplayers) - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* [GamesManagementAchievementsResetMultipleForAllPlayers](#gamesmanagementachievementsresetmultipleforallplayers) - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

## GamesManagementAchievementsReset

Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Achievements.GamesManagementAchievementsReset(ctx, operations.GamesManagementAchievementsResetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        AchievementID: "magnam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.GamesManagementAchievementsResetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementResetResponse != nil {
        // handle response
    }
}
```

## GamesManagementAchievementsResetAll

Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Achievements.GamesManagementAchievementsResetAll(ctx, operations.GamesManagementAchievementsResetAllRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.GamesManagementAchievementsResetAllSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementResetAllResponse != nil {
        // handle response
    }
}
```

## GamesManagementAchievementsResetAllForAllPlayers

Resets all draft achievements for all players. This method is only available to user accounts for your developer console.

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
    res, err := s.Achievements.GamesManagementAchievementsResetAllForAllPlayers(ctx, operations.GamesManagementAchievementsResetAllForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.GamesManagementAchievementsResetAllForAllPlayersSecurity{
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

## GamesManagementAchievementsResetForAllPlayers

Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.

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
    res, err := s.Achievements.GamesManagementAchievementsResetForAllPlayers(ctx, operations.GamesManagementAchievementsResetForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        AchievementID: "esse",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.GamesManagementAchievementsResetForAllPlayersSecurity{
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

## GamesManagementAchievementsResetMultipleForAllPlayers

Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

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
    res, err := s.Achievements.GamesManagementAchievementsResetMultipleForAllPlayers(ctx, operations.GamesManagementAchievementsResetMultipleForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AchievementResetMultipleForAllRequest: &shared.AchievementResetMultipleForAllRequest{
            AchievementIds: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            Kind: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.GamesManagementAchievementsResetMultipleForAllPlayersSecurity{
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
