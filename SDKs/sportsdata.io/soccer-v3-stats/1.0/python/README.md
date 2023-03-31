# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/soccer-v3-stats/1.0/python
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


req = operations.AreasCountriesRequest(
    format="json",
)
    
res = s.areas_countries(req)

if res.areas is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `areas_countries` - Areas (Countries)
* `box_score` - Box Score
* `box_scores_by_date` - Box Scores by Date
* `box_scores_by_date_by_competition` - Box Scores by Date by Competition
* `box_scores_by_date_delta` - Box Scores by Date Delta
* `box_scores_delta_by_date_by_competition` - Box Scores Delta by Date by Competition
* `competition_fixtures_league_details` - Competition Fixtures (League Details)
* `competition_hierarchy_league_hierarchy` - Competition Hierarchy (League Hierarchy)
* `competitions_leagues` - Competitions (Leagues)
* `dfs_slates_by_date` - Dfs Slates By Date
* `games_by_date` - Games by Date
* `memberships_active` - Memberships (Active)
* `memberships_by_competition_active` - Memberships by Competition (Active)
* `memberships_by_competition_historical` - Memberships by Competition (Historical)
* `memberships_by_team_active` - Memberships by Team (Active)
* `memberships_by_team_historical` - Memberships by Team (Historical)
* `memberships_historical` - Memberships (Historical)
* `memberships_recently_changed` - Memberships (Recently Changed)
* `player` - Player
* `player_game_stats_by_date` - Player Game Stats by Date
* `player_game_stats_by_player` - Player Game Stats by Player
* `player_season_stats` - Player Season Stats
* `player_season_stats_by_player` - Player Season Stats by Player
* `player_season_stats_by_team` - Player Season Stats by Team
* `players` - Players
* `players_by_team` - Players by Team
* `schedule` - Schedule
* `season_teams` - Season Teams
* `standings` - Standings
* `team_game_stats_by_date` - Team Game Stats by Date
* `team_season_stats` - Team Season Stats
* `teams` - Teams
* `upcoming_dfs_slates_by_competition` - Upcoming Dfs Slates By Competition
* `upcoming_schedule_by_player` - Upcoming Schedule By Player
* `venues` - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
