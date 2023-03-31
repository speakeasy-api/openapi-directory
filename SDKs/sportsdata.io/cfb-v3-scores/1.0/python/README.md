# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/cfb-v3-scores/1.0/python
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
* `conference_hierarchy_with_teams` - Conference Hierarchy (with Teams)
* `current_season` - Current Season
* `current_season_details` - Current Season Details
* `current_seasontype` - Current SeasonType
* `current_week` - Current Week
* `games_by_date` - Games by Date
* `games_by_week` - Games by Week
* `injured_players` - Injured Players
* `player_details_by_active` - Player Details By Active
* `player_details_by_player` - Player Details By Player
* `player_details_by_team` - Player Details by Team
* `schedules` - Schedules
* `stadiums` - Stadiums
* `team_game_logs_by_season` - Team Game Logs By Season
* `team_game_stats_by_week` - Team Game Stats by Week
* `team_season_stats_standings` - Team Season Stats & Standings
* `teams` - Teams
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
