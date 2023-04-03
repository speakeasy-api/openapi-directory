# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
