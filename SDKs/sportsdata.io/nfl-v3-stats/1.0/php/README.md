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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AreGamesInProgressRequest;
use \OpenAPI\OpenAPI\Models\Operations\AreGamesInProgressFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreGamesInProgressRequest();
    $request->format = AreGamesInProgressFormatEnum::JSON;

    $response = $sdk->areGamesInProgress($request);

    if ($response->areGamesInProgress200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [areGamesInProgress](docs/sdk/README.md#aregamesinprogress) - Are Games In Progress
* [boxScoreByScoreidV](docs/sdk/README.md#boxscorebyscoreidv) - Box Score by ScoreID V3
* [boxScoreV](docs/sdk/README.md#boxscorev) - Box Score V3
* [boxScoresDeltaV](docs/sdk/README.md#boxscoresdeltav) - Box Scores Delta V3
* [boxScoresVSimulation](docs/sdk/README.md#boxscoresvsimulation) - Box Scores V3 Simulation
* [byeWeeks](docs/sdk/README.md#byeweeks) - Bye Weeks
* [dailyFantasyPlayers](docs/sdk/README.md#dailyfantasyplayers) - Daily Fantasy Players
* [dailyFantasyScoring](docs/sdk/README.md#dailyfantasyscoring) - Daily Fantasy Scoring
* [dfsSlatesByDate](docs/sdk/README.md#dfsslatesbydate) - DFS Slates by Date
* [dfsSlatesByWeek](docs/sdk/README.md#dfsslatesbyweek) - DFS Slates by Week
* [fantasyDefenseGameStats](docs/sdk/README.md#fantasydefensegamestats) - Fantasy Defense Game Stats
* [fantasyDefenseGameStatsByTeam](docs/sdk/README.md#fantasydefensegamestatsbyteam) - Fantasy Defense Game Stats by Team
* [fantasyDefenseSeasonStats](docs/sdk/README.md#fantasydefenseseasonstats) - Fantasy Defense Season Stats
* [fantasyDefenseSeasonStatsByTeam](docs/sdk/README.md#fantasydefenseseasonstatsbyteam) - Fantasy Defense Season Stats by Team
* [fantasyPlayerOwnershipPercentagesSeasonLong](docs/sdk/README.md#fantasyplayerownershippercentagesseasonlong) - Fantasy Player Ownership Percentages (Season-Long)
* [fantasyPlayersWithAdp](docs/sdk/README.md#fantasyplayerswithadp) - Fantasy Players with ADP
* [gameStatsBySeasonDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [gameStatsByWeekDeprecatedUseTeamGameStatsInstead](docs/sdk/README.md#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [idpFantasyPlayersWithAdp](docs/sdk/README.md#idpfantasyplayerswithadp) - IDP Fantasy Players with ADP
* [injuries](docs/sdk/README.md#injuries) - Injuries
* [injuriesByTeam](docs/sdk/README.md#injuriesbyteam) - Injuries by Team
* [leagueLeadersBySeason](docs/sdk/README.md#leagueleadersbyseason) - League Leaders by Season
* [leagueLeadersByWeek](docs/sdk/README.md#leagueleadersbyweek) - League Leaders by Week
* [legacyBoxScore](docs/sdk/README.md#legacyboxscore) - Legacy Box Score
* [legacyBoxScores](docs/sdk/README.md#legacyboxscores) - Legacy Box Scores
* [legacyBoxScoresActive](docs/sdk/README.md#legacyboxscoresactive) - Legacy Box Scores Active
* [legacyBoxScoresDelta](docs/sdk/README.md#legacyboxscoresdelta) - Legacy Box Scores Delta
* [legacyBoxScoresDeltaCurrentWeek](docs/sdk/README.md#legacyboxscoresdeltacurrentweek) - Legacy Box Scores Delta (Current Week)
* [legacyBoxScoresFinal](docs/sdk/README.md#legacyboxscoresfinal) - Legacy Box Scores Final
* [legacyBoxScoresLive](docs/sdk/README.md#legacyboxscoreslive) - Legacy Box Scores Live
* [news](docs/sdk/README.md#news) - News
* [newsByDate](docs/sdk/README.md#newsbydate) - News by Date
* [newsByPlayer](docs/sdk/README.md#newsbyplayer) - News by Player
* [newsByTeam](docs/sdk/README.md#newsbyteam) - News by Team
* [playerDetailsByAvailable](docs/sdk/README.md#playerdetailsbyavailable) - Player Details by Available
* [playerDetailsByFreeAgents](docs/sdk/README.md#playerdetailsbyfreeagents) - Player Details by Free Agents
* [playerDetailsByPlayer](docs/sdk/README.md#playerdetailsbyplayer) - Player Details by Player
* [playerDetailsByRookieDraftYear](docs/sdk/README.md#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [playerDetailsByTeam](docs/sdk/README.md#playerdetailsbyteam) - Player Details by Team
* [playerGameLogsBySeason](docs/sdk/README.md#playergamelogsbyseason) - Player Game Logs By Season
* [playerGameRedZoneStats](docs/sdk/README.md#playergameredzonestats) - Player Game Red Zone Stats
* [playerGameRedZoneStatsInsideFive](docs/sdk/README.md#playergameredzonestatsinsidefive) - Player Game Red Zone Stats Inside Five
* [playerGameRedZoneStatsInsideTen](docs/sdk/README.md#playergameredzonestatsinsideten) - Player Game Red Zone Stats Inside Ten
* [playerGameStatsByPlayer](docs/sdk/README.md#playergamestatsbyplayer) - Player Game Stats by Player
* [playerGameStatsByTeam](docs/sdk/README.md#playergamestatsbyteam) - Player Game Stats by Team
* [playerGameStatsByWeek](docs/sdk/README.md#playergamestatsbyweek) - Player Game Stats by Week
* [playerGameStatsByWeekDelta](docs/sdk/README.md#playergamestatsbyweekdelta) - Player Game Stats by Week Delta
* [playerGameStatsDelta](docs/sdk/README.md#playergamestatsdelta) - Player Game Stats Delta
* [playerSeasonRedZoneStats](docs/sdk/README.md#playerseasonredzonestats) - Player Season Red Zone Stats
* [playerSeasonRedZoneStatsInsideFive](docs/sdk/README.md#playerseasonredzonestatsinsidefive) - Player Season Red Zone Stats Inside Five
* [playerSeasonRedZoneStatsInsideTen](docs/sdk/README.md#playerseasonredzonestatsinsideten) - Player Season Red Zone Stats Inside Ten
* [playerSeasonStats](docs/sdk/README.md#playerseasonstats) - Player Season Stats
* [playerSeasonStatsByPlayer](docs/sdk/README.md#playerseasonstatsbyplayer) - Player Season Stats by Player
* [playerSeasonStatsByTeam](docs/sdk/README.md#playerseasonstatsbyteam) - Player Season Stats by Team
* [playerSeasonThirdDownStats](docs/sdk/README.md#playerseasonthirddownstats) - Player Season Third Down Stats
* [proBowlers](docs/sdk/README.md#probowlers) - Pro Bowlers
* [schedule](docs/sdk/README.md#schedule) - Schedule
* [scoresByDate](docs/sdk/README.md#scoresbydate) - Scores by Date
* [scoresBySeason](docs/sdk/README.md#scoresbyseason) - Scores by Season 
* [scoresByWeek](docs/sdk/README.md#scoresbyweek) - Scores by Week
* [scoresByWeekSimulation](docs/sdk/README.md#scoresbyweeksimulation) - Scores by Week Simulation
* [seasonCurrent](docs/sdk/README.md#seasoncurrent) - Season Current
* [seasonLastCompleted](docs/sdk/README.md#seasonlastcompleted) - Season Last Completed
* [seasonUpcoming](docs/sdk/README.md#seasonupcoming) - Season Upcoming
* [stadiums](docs/sdk/README.md#stadiums) - Stadiums
* [standings](docs/sdk/README.md#standings) - Standings
* [teamGameLogsBySeason](docs/sdk/README.md#teamgamelogsbyseason) - Team Game Logs By Season
* [teamGameStats](docs/sdk/README.md#teamgamestats) - Team Game Stats
* [teamSeasonStats](docs/sdk/README.md#teamseasonstats) - Team Season Stats
* [teamsActive](docs/sdk/README.md#teamsactive) - Teams (Active)
* [teamsAll](docs/sdk/README.md#teamsall) - Teams (All)
* [teamsBySeason](docs/sdk/README.md#teamsbyseason) - Teams by Season
* [timeframes](docs/sdk/README.md#timeframes) - Timeframes
* [weekCurrent](docs/sdk/README.md#weekcurrent) - Week Current
* [weekLastCompleted](docs/sdk/README.md#weeklastcompleted) - Week Last Completed
* [weekUpcoming](docs/sdk/README.md#weekupcoming) - Week Upcoming
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
