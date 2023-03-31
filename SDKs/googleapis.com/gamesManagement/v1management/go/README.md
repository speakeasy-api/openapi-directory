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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GamesManagementAchievementsResetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AchievementID: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Achievements.GamesManagementAchievementsReset(ctx, req, operations.GamesManagementAchievementsResetSecurity{
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


### Achievements

* `GamesManagementAchievementsReset` - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementAchievementsResetAll` - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementAchievementsResetAllForAllPlayers` - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* `GamesManagementAchievementsResetForAllPlayers` - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* `GamesManagementAchievementsResetMultipleForAllPlayers` - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### Applications

* `GamesManagementApplicationsListHidden` - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### Events

* `GamesManagementEventsReset` - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementEventsResetAll` - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementEventsResetAllForAllPlayers` - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* `GamesManagementEventsResetForAllPlayers` - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* `GamesManagementEventsResetMultipleForAllPlayers` - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### Players

* `GamesManagementPlayersHide` - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* `GamesManagementPlayersUnhide` - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### Scores

* `GamesManagementScoresReset` - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementScoresResetAll` - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementScoresResetAllForAllPlayers` - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* `GamesManagementScoresResetForAllPlayers` - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* `GamesManagementScoresResetMultipleForAllPlayers` - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
