# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/mlb-v3-scores/1.0/python
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
* `current_season` - Current Season
* `games_by_date` - Games by Date
* `news` - News
* `news_by_date` - News by Date
* `news_by_player` - News by Player
* `player_details_by_active` - Player Details by Active
* `player_details_by_free_agents` - Player Details by Free Agents
* `player_details_by_player` - Player Details by Player
* `players_by_team` - Players by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `standings` - Standings
* `team_game_logs_by_season` - Team Game Logs By Season
* `team_game_stats_by_date` - Team Game Stats by Date
* `team_season_stats` - Team Season Stats
* `teams_active` - Teams (Active)
* `teams_all` - Teams (All)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
