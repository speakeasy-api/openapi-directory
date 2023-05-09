# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/games/v1/go
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
    res, err := s.AchievementDefinitions.GamesAchievementDefinitionsList(ctx, operations.GamesAchievementDefinitionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Language: sdk.String("corrupti"),
        MaxResults: sdk.Int64(847252),
        OauthToken: sdk.String("vel"),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.GamesAchievementDefinitionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementDefinitionsListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AchievementDefinitions](docs/achievementdefinitions/README.md)

* [GamesAchievementDefinitionsList](docs/achievementdefinitions/README.md#gamesachievementdefinitionslist) - Lists all the achievement definitions for your application.

### [Achievements](docs/achievements/README.md)

* [GamesAchievementsIncrement](docs/achievements/README.md#gamesachievementsincrement) - Increments the steps of the achievement with the given ID for the currently authenticated player.
* [GamesAchievementsList](docs/achievements/README.md#gamesachievementslist) - Lists the progress for all your application's achievements for the currently authenticated player.
* [GamesAchievementsReveal](docs/achievements/README.md#gamesachievementsreveal) - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* [GamesAchievementsSetStepsAtLeast](docs/achievements/README.md#gamesachievementssetstepsatleast) - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* [GamesAchievementsUnlock](docs/achievements/README.md#gamesachievementsunlock) - Unlocks this achievement for the currently authenticated player.
* [GamesAchievementsUpdateMultiple](docs/achievements/README.md#gamesachievementsupdatemultiple) - Updates multiple achievements for the currently authenticated player.

### [Applications](docs/applications/README.md)

* [GamesApplicationsGet](docs/applications/README.md#gamesapplicationsget) - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* [GamesApplicationsGetEndPoint](docs/applications/README.md#gamesapplicationsgetendpoint) - Returns a URL for the requested end point type.
* [GamesApplicationsPlayed](docs/applications/README.md#gamesapplicationsplayed) - Indicate that the currently authenticated user is playing your application.
* [GamesApplicationsVerify](docs/applications/README.md#gamesapplicationsverify) - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### [Events](docs/events/README.md)

* [GamesEventsListByPlayer](docs/events/README.md#gameseventslistbyplayer) - Returns a list showing the current progress on events in this application for the currently authenticated user.
* [GamesEventsListDefinitions](docs/events/README.md#gameseventslistdefinitions) - Returns a list of the event definitions in this application.
* [GamesEventsRecord](docs/events/README.md#gameseventsrecord) - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### [Leaderboards](docs/leaderboards/README.md)

* [GamesLeaderboardsGet](docs/leaderboards/README.md#gamesleaderboardsget) - Retrieves the metadata of the leaderboard with the given ID.
* [GamesLeaderboardsList](docs/leaderboards/README.md#gamesleaderboardslist) - Lists all the leaderboard metadata for your application.

### [Metagame](docs/metagame/README.md)

* [GamesMetagameGetMetagameConfig](docs/metagame/README.md#gamesmetagamegetmetagameconfig) - Return the metagame configuration data for the calling application.
* [GamesMetagameListCategoriesByPlayer](docs/metagame/README.md#gamesmetagamelistcategoriesbyplayer) - List play data aggregated per category for the player corresponding to `playerId`.

### [Players](docs/players/README.md)

* [GamesPlayersGet](docs/players/README.md#gamesplayersget) - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* [GamesPlayersGetMultipleApplicationPlayerIds](docs/players/README.md#gamesplayersgetmultipleapplicationplayerids) - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* [GamesPlayersGetScopedPlayerIds](docs/players/README.md#gamesplayersgetscopedplayerids) - Retrieves scoped player identifiers for currently authenticated user.
* [GamesPlayersList](docs/players/README.md#gamesplayerslist) - Get the collection of players for the currently authenticated user.

### [Revisions](docs/revisions/README.md)

* [GamesRevisionsCheck](docs/revisions/README.md#gamesrevisionscheck) - Checks whether the games client is out of date.

### [Scores](docs/scores/README.md)

* [GamesScoresGet](docs/scores/README.md#gamesscoresget) - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* [GamesScoresList](docs/scores/README.md#gamesscoreslist) - Lists the scores in a leaderboard, starting from the top.
* [GamesScoresListWindow](docs/scores/README.md#gamesscoreslistwindow) - Lists the scores in a leaderboard around (and including) a player's score.
* [GamesScoresSubmit](docs/scores/README.md#gamesscoressubmit) - Submits a score to the specified leaderboard.
* [GamesScoresSubmitMultiple](docs/scores/README.md#gamesscoressubmitmultiple) - Submits multiple scores to leaderboards.

### [Snapshots](docs/snapshots/README.md)

* [GamesSnapshotsGet](docs/snapshots/README.md#gamessnapshotsget) - Retrieves the metadata for a given snapshot ID.
* [GamesSnapshotsList](docs/snapshots/README.md#gamessnapshotslist) - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### [Stats](docs/stats/README.md)

* [GamesStatsGet](docs/stats/README.md#gamesstatsget) - Returns engagement and spend statistics in this application for the currently authenticated user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
