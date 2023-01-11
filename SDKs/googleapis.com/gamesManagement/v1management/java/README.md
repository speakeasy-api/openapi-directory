# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GamesManagementAchievementsResetRequest req = new GamesManagementAchievementsResetRequest() {{
                security = new GamesManagementAchievementsResetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GamesManagementAchievementsResetPathParams() {{
                    achievementId = "sit";
                }};
                queryParams = new GamesManagementAchievementsResetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
            }};

            GamesManagementAchievementsResetResponse res = sdk.achievements.gamesManagementAchievementsReset(req);

            if (res.achievementResetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievements

* `gamesManagementAchievementsReset` - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementAchievementsResetAll` - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementAchievementsResetAllForAllPlayers` - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* `gamesManagementAchievementsResetForAllPlayers` - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* `gamesManagementAchievementsResetMultipleForAllPlayers` - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### applications

* `gamesManagementApplicationsListHidden` - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### events

* `gamesManagementEventsReset` - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementEventsResetAll` - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementEventsResetAllForAllPlayers` - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* `gamesManagementEventsResetForAllPlayers` - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* `gamesManagementEventsResetMultipleForAllPlayers` - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### players

* `gamesManagementPlayersHide` - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* `gamesManagementPlayersUnhide` - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### scores

* `gamesManagementScoresReset` - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementScoresResetAll` - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementScoresResetAllForAllPlayers` - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* `gamesManagementScoresResetForAllPlayers` - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* `gamesManagementScoresResetMultipleForAllPlayers` - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
