# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gamesManagement/v1management/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AchievementID: "distinctio",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Achievements](docs/achievements/README.md)

* [GamesManagementAchievementsReset](docs/achievements/README.md#gamesmanagementachievementsreset) - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementAchievementsResetAll](docs/achievements/README.md#gamesmanagementachievementsresetall) - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementAchievementsResetAllForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetallforallplayers) - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* [GamesManagementAchievementsResetForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetforallplayers) - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* [GamesManagementAchievementsResetMultipleForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetmultipleforallplayers) - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### [Applications](docs/applications/README.md)

* [GamesManagementApplicationsListHidden](docs/applications/README.md#gamesmanagementapplicationslisthidden) - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### [Events](docs/events/README.md)

* [GamesManagementEventsReset](docs/events/README.md#gamesmanagementeventsreset) - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementEventsResetAll](docs/events/README.md#gamesmanagementeventsresetall) - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementEventsResetAllForAllPlayers](docs/events/README.md#gamesmanagementeventsresetallforallplayers) - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* [GamesManagementEventsResetForAllPlayers](docs/events/README.md#gamesmanagementeventsresetforallplayers) - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* [GamesManagementEventsResetMultipleForAllPlayers](docs/events/README.md#gamesmanagementeventsresetmultipleforallplayers) - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### [Players](docs/players/README.md)

* [GamesManagementPlayersHide](docs/players/README.md#gamesmanagementplayershide) - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* [GamesManagementPlayersUnhide](docs/players/README.md#gamesmanagementplayersunhide) - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### [Scores](docs/scores/README.md)

* [GamesManagementScoresReset](docs/scores/README.md#gamesmanagementscoresreset) - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementScoresResetAll](docs/scores/README.md#gamesmanagementscoresresetall) - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* [GamesManagementScoresResetAllForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetallforallplayers) - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* [GamesManagementScoresResetForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetforallplayers) - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* [GamesManagementScoresResetMultipleForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetmultipleforallplayers) - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
