# Events

### Available Operations

* [GamesManagementEventsReset](#gamesmanagementeventsreset) - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementEventsResetAll](#gamesmanagementeventsresetall) - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementEventsResetAllForAllPlayers](#gamesmanagementeventsresetallforallplayers) - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* [GamesManagementEventsResetForAllPlayers](#gamesmanagementeventsresetforallplayers) - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* [GamesManagementEventsResetMultipleForAllPlayers](#gamesmanagementeventsresetmultipleforallplayers) - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

## GamesManagementEventsReset

Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Events.GamesManagementEventsReset(ctx, operations.GamesManagementEventsResetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        EventID: "ipsa",
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.GamesManagementEventsResetSecurity{
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

## GamesManagementEventsResetAll

Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

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
    res, err := s.Events.GamesManagementEventsResetAll(ctx, operations.GamesManagementEventsResetAllRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.GamesManagementEventsResetAllSecurity{
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

## GamesManagementEventsResetAllForAllPlayers

Resets all draft events for all players. This method is only available to user accounts for your developer console.

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
    res, err := s.Events.GamesManagementEventsResetAllForAllPlayers(ctx, operations.GamesManagementEventsResetAllForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.GamesManagementEventsResetAllForAllPlayersSecurity{
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

## GamesManagementEventsResetForAllPlayers

Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.

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
    res, err := s.Events.GamesManagementEventsResetForAllPlayers(ctx, operations.GamesManagementEventsResetForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        EventID: "molestiae",
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.GamesManagementEventsResetForAllPlayersSecurity{
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

## GamesManagementEventsResetMultipleForAllPlayers

Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

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
    res, err := s.Events.GamesManagementEventsResetMultipleForAllPlayers(ctx, operations.GamesManagementEventsResetMultipleForAllPlayersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EventsResetMultipleForAllRequest: &shared.EventsResetMultipleForAllRequest{
            EventIds: []string{
                "odit",
                "quo",
            },
            Kind: sdk.String("sequi"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.GamesManagementEventsResetMultipleForAllPlayersSecurity{
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
