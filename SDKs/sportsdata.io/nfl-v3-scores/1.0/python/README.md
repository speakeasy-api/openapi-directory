# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/nfl-v3-scores/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.AreGamesInProgressRequest(
    format="JSON",
)
    
res = s.are_games_in_progress(req)

if res.are_games_in_progress_200_application_json_boolean is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `are_games_in_progress` - Are Games In Progress
* `bye_weeks` - Bye Weeks
* `depth_charts` - Depth Charts
* `game_stats_by_season_deprecated_use_team_game_stats_instead` - Game Stats by Season (Deprecated, use Team Game Stats instead)
* `game_stats_by_week_deprecated_use_team_game_stats_instead` - Game Stats by Week (Deprecated, use Team Game Stats instead)
* `news` - News
* `news_by_date` - News by Date
* `news_by_player` - News by Player
* `news_by_team` - News by Team
* `player_details_by_available` - Player Details by Available
* `player_details_by_free_agents` - Player Details by Free Agents
* `player_details_by_player` - Player Details by Player
* `player_details_by_rookie_draft_year` - Player Details by Rookie Draft Year
* `player_details_by_team` - Player Details by Team
* `referees` - Referees
* `schedule` - Schedule
* `scores_by_date` - Scores by Date
* `scores_by_season` - Scores by Season 
* `scores_by_week` - Scores by Week
* `scores_by_week_simulation` - Scores by Week Simulation
* `season_current` - Season Current
* `season_last_completed` - Season Last Completed
* `season_upcoming` - Season Upcoming
* `stadiums` - Stadiums
* `standings` - Standings
* `team_game_logs_by_season` - Team Game Logs By Season
* `team_game_stats` - Team Game Stats
* `team_season_stats` - Team Season Stats
* `teams_active` - Teams (Active)
* `teams_all` - Teams (All)
* `teams_by_season` - Teams by Season
* `timeframes` - Timeframes
* `week_current` - Week Current
* `week_last_completed` - Week Last Completed
* `week_upcoming` - Week Upcoming
* `x_ping` - X Ping
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
