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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementDefinitionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesAchievementDefinitionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesAchievementDefinitionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->language = 'corrupti';
    $request->maxResults = 847252;
    $request->oauthToken = 'vel';
    $request->pageToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new GamesAchievementDefinitionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementDefinitions->gamesAchievementDefinitionsList($request, $requestSecurity);

    if ($response->achievementDefinitionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [achievementDefinitions](docs/achievementdefinitions/README.md)

* [gamesAchievementDefinitionsList](docs/achievementdefinitions/README.md#gamesachievementdefinitionslist) - Lists all the achievement definitions for your application.

### [achievements](docs/achievements/README.md)

* [gamesAchievementsIncrement](docs/achievements/README.md#gamesachievementsincrement) - Increments the steps of the achievement with the given ID for the currently authenticated player.
* [gamesAchievementsList](docs/achievements/README.md#gamesachievementslist) - Lists the progress for all your application's achievements for the currently authenticated player.
* [gamesAchievementsReveal](docs/achievements/README.md#gamesachievementsreveal) - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* [gamesAchievementsSetStepsAtLeast](docs/achievements/README.md#gamesachievementssetstepsatleast) - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* [gamesAchievementsUnlock](docs/achievements/README.md#gamesachievementsunlock) - Unlocks this achievement for the currently authenticated player.
* [gamesAchievementsUpdateMultiple](docs/achievements/README.md#gamesachievementsupdatemultiple) - Updates multiple achievements for the currently authenticated player.

### [applications](docs/applications/README.md)

* [gamesApplicationsGet](docs/applications/README.md#gamesapplicationsget) - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* [gamesApplicationsGetEndPoint](docs/applications/README.md#gamesapplicationsgetendpoint) - Returns a URL for the requested end point type.
* [gamesApplicationsPlayed](docs/applications/README.md#gamesapplicationsplayed) - Indicate that the currently authenticated user is playing your application.
* [gamesApplicationsVerify](docs/applications/README.md#gamesapplicationsverify) - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### [events](docs/events/README.md)

* [gamesEventsListByPlayer](docs/events/README.md#gameseventslistbyplayer) - Returns a list showing the current progress on events in this application for the currently authenticated user.
* [gamesEventsListDefinitions](docs/events/README.md#gameseventslistdefinitions) - Returns a list of the event definitions in this application.
* [gamesEventsRecord](docs/events/README.md#gameseventsrecord) - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### [leaderboards](docs/leaderboards/README.md)

* [gamesLeaderboardsGet](docs/leaderboards/README.md#gamesleaderboardsget) - Retrieves the metadata of the leaderboard with the given ID.
* [gamesLeaderboardsList](docs/leaderboards/README.md#gamesleaderboardslist) - Lists all the leaderboard metadata for your application.

### [metagame](docs/metagame/README.md)

* [gamesMetagameGetMetagameConfig](docs/metagame/README.md#gamesmetagamegetmetagameconfig) - Return the metagame configuration data for the calling application.
* [gamesMetagameListCategoriesByPlayer](docs/metagame/README.md#gamesmetagamelistcategoriesbyplayer) - List play data aggregated per category for the player corresponding to `playerId`.

### [players](docs/players/README.md)

* [gamesPlayersGet](docs/players/README.md#gamesplayersget) - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* [gamesPlayersGetMultipleApplicationPlayerIds](docs/players/README.md#gamesplayersgetmultipleapplicationplayerids) - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* [gamesPlayersGetScopedPlayerIds](docs/players/README.md#gamesplayersgetscopedplayerids) - Retrieves scoped player identifiers for currently authenticated user.
* [gamesPlayersList](docs/players/README.md#gamesplayerslist) - Get the collection of players for the currently authenticated user.

### [revisions](docs/revisions/README.md)

* [gamesRevisionsCheck](docs/revisions/README.md#gamesrevisionscheck) - Checks whether the games client is out of date.

### [scores](docs/scores/README.md)

* [gamesScoresGet](docs/scores/README.md#gamesscoresget) - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* [gamesScoresList](docs/scores/README.md#gamesscoreslist) - Lists the scores in a leaderboard, starting from the top.
* [gamesScoresListWindow](docs/scores/README.md#gamesscoreslistwindow) - Lists the scores in a leaderboard around (and including) a player's score.
* [gamesScoresSubmit](docs/scores/README.md#gamesscoressubmit) - Submits a score to the specified leaderboard.
* [gamesScoresSubmitMultiple](docs/scores/README.md#gamesscoressubmitmultiple) - Submits multiple scores to leaderboards.

### [snapshots](docs/snapshots/README.md)

* [gamesSnapshotsGet](docs/snapshots/README.md#gamessnapshotsget) - Retrieves the metadata for a given snapshot ID.
* [gamesSnapshotsList](docs/snapshots/README.md#gamessnapshotslist) - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### [stats](docs/stats/README.md)

* [gamesStatsGet](docs/stats/README.md#gamesstatsget) - Returns engagement and spend statistics in this application for the currently authenticated user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
