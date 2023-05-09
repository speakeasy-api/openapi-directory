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
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetRequest req = new GamesManagementAchievementsResetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            GamesManagementAchievementsResetResponse res = sdk.achievements.gamesManagementAchievementsReset(req, new GamesManagementAchievementsResetSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementResetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [achievements](docs/achievements/README.md)

* [gamesManagementAchievementsReset](docs/achievements/README.md#gamesmanagementachievementsreset) - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementAchievementsResetAll](docs/achievements/README.md#gamesmanagementachievementsresetall) - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementAchievementsResetAllForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetallforallplayers) - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* [gamesManagementAchievementsResetForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetforallplayers) - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* [gamesManagementAchievementsResetMultipleForAllPlayers](docs/achievements/README.md#gamesmanagementachievementsresetmultipleforallplayers) - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### [applications](docs/applications/README.md)

* [gamesManagementApplicationsListHidden](docs/applications/README.md#gamesmanagementapplicationslisthidden) - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### [events](docs/events/README.md)

* [gamesManagementEventsReset](docs/events/README.md#gamesmanagementeventsreset) - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAll](docs/events/README.md#gamesmanagementeventsresetall) - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAllForAllPlayers](docs/events/README.md#gamesmanagementeventsresetallforallplayers) - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* [gamesManagementEventsResetForAllPlayers](docs/events/README.md#gamesmanagementeventsresetforallplayers) - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* [gamesManagementEventsResetMultipleForAllPlayers](docs/events/README.md#gamesmanagementeventsresetmultipleforallplayers) - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### [players](docs/players/README.md)

* [gamesManagementPlayersHide](docs/players/README.md#gamesmanagementplayershide) - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* [gamesManagementPlayersUnhide](docs/players/README.md#gamesmanagementplayersunhide) - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### [scores](docs/scores/README.md)

* [gamesManagementScoresReset](docs/scores/README.md#gamesmanagementscoresreset) - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAll](docs/scores/README.md#gamesmanagementscoresresetall) - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAllForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetallforallplayers) - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* [gamesManagementScoresResetForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetforallplayers) - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* [gamesManagementScoresResetMultipleForAllPlayers](docs/scores/README.md#gamesmanagementscoresresetmultipleforallplayers) - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
