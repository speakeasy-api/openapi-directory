# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListSecurity;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListRequest;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementDefinitionsListRequest req = new GamesAchievementDefinitionsListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                language = "corrupti";
                maxResults = 847252;
                oauthToken = "vel";
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }}            

            GamesAchievementDefinitionsListResponse res = sdk.achievementDefinitions.gamesAchievementDefinitionsList(req, new GamesAchievementDefinitionsListSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementDefinitionsListResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### achievementDefinitions

* `gamesAchievementDefinitionsList` - Lists all the achievement definitions for your application.

### achievements

* `gamesAchievementsIncrement` - Increments the steps of the achievement with the given ID for the currently authenticated player.
* `gamesAchievementsList` - Lists the progress for all your application's achievements for the currently authenticated player.
* `gamesAchievementsReveal` - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* `gamesAchievementsSetStepsAtLeast` - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* `gamesAchievementsUnlock` - Unlocks this achievement for the currently authenticated player.
* `gamesAchievementsUpdateMultiple` - Updates multiple achievements for the currently authenticated player.

### applications

* `gamesApplicationsGet` - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* `gamesApplicationsGetEndPoint` - Returns a URL for the requested end point type.
* `gamesApplicationsPlayed` - Indicate that the currently authenticated user is playing your application.
* `gamesApplicationsVerify` - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### events

* `gamesEventsListByPlayer` - Returns a list showing the current progress on events in this application for the currently authenticated user.
* `gamesEventsListDefinitions` - Returns a list of the event definitions in this application.
* `gamesEventsRecord` - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### leaderboards

* `gamesLeaderboardsGet` - Retrieves the metadata of the leaderboard with the given ID.
* `gamesLeaderboardsList` - Lists all the leaderboard metadata for your application.

### metagame

* `gamesMetagameGetMetagameConfig` - Return the metagame configuration data for the calling application.
* `gamesMetagameListCategoriesByPlayer` - List play data aggregated per category for the player corresponding to `playerId`.

### players

* `gamesPlayersGet` - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* `gamesPlayersGetMultipleApplicationPlayerIds` - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* `gamesPlayersGetScopedPlayerIds` - Retrieves scoped player identifiers for currently authenticated user.
* `gamesPlayersList` - Get the collection of players for the currently authenticated user.

### revisions

* `gamesRevisionsCheck` - Checks whether the games client is out of date.

### scores

* `gamesScoresGet` - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* `gamesScoresList` - Lists the scores in a leaderboard, starting from the top.
* `gamesScoresListWindow` - Lists the scores in a leaderboard around (and including) a player's score.
* `gamesScoresSubmit` - Submits a score to the specified leaderboard.
* `gamesScoresSubmitMultiple` - Submits multiple scores to leaderboards.

### snapshots

* `gamesSnapshotsGet` - Retrieves the metadata for a given snapshot ID.
* `gamesSnapshotsList` - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### stats

* `gamesStatsGet` - Returns engagement and spend statistics in this application for the currently authenticated user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
