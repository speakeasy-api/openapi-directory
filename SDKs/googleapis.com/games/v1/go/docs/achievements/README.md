# Achievements

### Available Operations

* [GamesAchievementsIncrement](#gamesachievementsincrement) - Increments the steps of the achievement with the given ID for the currently authenticated player.
* [GamesAchievementsList](#gamesachievementslist) - Lists the progress for all your application's achievements for the currently authenticated player.
* [GamesAchievementsReveal](#gamesachievementsreveal) - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* [GamesAchievementsSetStepsAtLeast](#gamesachievementssetstepsatleast) - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* [GamesAchievementsUnlock](#gamesachievementsunlock) - Unlocks this achievement for the currently authenticated player.
* [GamesAchievementsUpdateMultiple](#gamesachievementsupdatemultiple) - Updates multiple achievements for the currently authenticated player.

## GamesAchievementsIncrement

Increments the steps of the achievement with the given ID for the currently authenticated player.

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
    res, err := s.Achievements.GamesAchievementsIncrement(ctx, operations.GamesAchievementsIncrementRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        AchievementID: "ab",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        RequestID: sdk.String("sapiente"),
        StepsToIncrement: 778157,
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.GamesAchievementsIncrementSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementIncrementResponse != nil {
        // handle response
    }
}
```

## GamesAchievementsList

Lists the progress for all your application's achievements for the currently authenticated player.

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
    res, err := s.Achievements.GamesAchievementsList(ctx, operations.GamesAchievementsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        Language: sdk.String("totam"),
        MaxResults: sdk.Int64(780529),
        OauthToken: sdk.String("dolorum"),
        PageToken: sdk.String("dicta"),
        PlayerID: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        State: operations.GamesAchievementsListStateEnumRevealed.ToPointer(),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.GamesAchievementsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerAchievementListResponse != nil {
        // handle response
    }
}
```

## GamesAchievementsReveal

Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.

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
    res, err := s.Achievements.GamesAchievementsReveal(ctx, operations.GamesAchievementsRevealRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        AchievementID: "totam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
    }, operations.GamesAchievementsRevealSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementRevealResponse != nil {
        // handle response
    }
}
```

## GamesAchievementsSetStepsAtLeast

Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

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
    res, err := s.Achievements.GamesAchievementsSetStepsAtLeast(ctx, operations.GamesAchievementsSetStepsAtLeastRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        AchievementID: "aspernatur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        Steps: 616934,
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.GamesAchievementsSetStepsAtLeastSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementSetStepsAtLeastResponse != nil {
        // handle response
    }
}
```

## GamesAchievementsUnlock

Unlocks this achievement for the currently authenticated player.

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
    res, err := s.Achievements.GamesAchievementsUnlock(ctx, operations.GamesAchievementsUnlockRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        AchievementID: "in",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.GamesAchievementsUnlockSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementUnlockResponse != nil {
        // handle response
    }
}
```

## GamesAchievementsUpdateMultiple

Updates multiple achievements for the currently authenticated player.

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
    res, err := s.Achievements.GamesAchievementsUpdateMultiple(ctx, operations.GamesAchievementsUpdateMultipleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AchievementUpdateMultipleRequest: &shared.AchievementUpdateMultipleRequest{
            Kind: sdk.String("mollitia"),
            Updates: []shared.AchievementUpdateRequest{
                shared.AchievementUpdateRequest{
                    AchievementID: sdk.String("dolores"),
                    IncrementPayload: &shared.GamesAchievementIncrement{
                        Kind: sdk.String("dolorem"),
                        RequestID: sdk.String("corporis"),
                        Steps: sdk.Int(128926),
                    },
                    Kind: sdk.String("nobis"),
                    SetStepsAtLeastPayload: &shared.GamesAchievementSetStepsAtLeast{
                        Kind: sdk.String("enim"),
                        Steps: sdk.Int(607831),
                    },
                    UpdateType: shared.AchievementUpdateRequestUpdateTypeEnumReveal.ToPointer(),
                },
                shared.AchievementUpdateRequest{
                    AchievementID: sdk.String("minima"),
                    IncrementPayload: &shared.GamesAchievementIncrement{
                        Kind: sdk.String("excepturi"),
                        RequestID: sdk.String("accusantium"),
                        Steps: sdk.Int(438601),
                    },
                    Kind: sdk.String("culpa"),
                    SetStepsAtLeastPayload: &shared.GamesAchievementSetStepsAtLeast{
                        Kind: sdk.String("doloribus"),
                        Steps: sdk.Int(958950),
                    },
                    UpdateType: shared.AchievementUpdateRequestUpdateTypeEnumAchievementUpdateTypeUnspecified.ToPointer(),
                },
                shared.AchievementUpdateRequest{
                    AchievementID: sdk.String("mollitia"),
                    IncrementPayload: &shared.GamesAchievementIncrement{
                        Kind: sdk.String("dolorem"),
                        RequestID: sdk.String("culpa"),
                        Steps: sdk.Int(161309),
                    },
                    Kind: sdk.String("repellat"),
                    SetStepsAtLeastPayload: &shared.GamesAchievementSetStepsAtLeast{
                        Kind: sdk.String("mollitia"),
                        Steps: sdk.Int(581850),
                    },
                    UpdateType: shared.AchievementUpdateRequestUpdateTypeEnumReveal.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("velit"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.GamesAchievementsUpdateMultipleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementUpdateMultipleResponse != nil {
        // handle response
    }
}
```
