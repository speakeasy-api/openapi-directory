# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/nfl-v3-projections/1.0/python
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


req = operations.DfsSlateOwnershipProjectionsBySlateidRequest(
    format="JSON",
    slate_id="provident",
)
    
res = s.dfs_slate_ownership_projections_by_slateid(req)

if res.dfs_slate_with_ownership_projection is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `dfs_slate_ownership_projections_by_slateid` - DFS Slate Ownership Projections by SlateID
* `dfs_slates_by_date` - DFS Slates by Date
* `dfs_slates_by_week` - DFS Slates by Week
* `idp_projected_player_game_stats_by_player_w_injuries_lineups_dfs_salaries` - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `idp_projected_player_game_stats_by_team_w_injuries_lineups_dfs_salaries` - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `idp_projected_player_game_stats_by_week_w_injuries_lineups_dfs_salaries` - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `injured_players` - Injured Players
* `projected_fantasy_defense_game_stats_w_dfs_salaries` - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* `projected_fantasy_defense_season_stats_w_adp` - Projected Fantasy Defense Season Stats (w/ ADP)
* `projected_player_game_stats_by_player_w_injuries_lineups_dfs_salaries` - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* `projected_player_game_stats_by_team_w_injuries_lineups_dfs_salaries` - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* `projected_player_game_stats_by_week_w_injuries_lineups_dfs_salaries` - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* `projected_player_season_stats_by_player_w_adp` - Projected Player Season Stats by Player (w/ ADP)
* `projected_player_season_stats_by_team_w_adp` - Projected Player Season Stats by Team (w/ ADP)
* `projected_player_season_stats_w_adp` - Projected Player Season Stats (w/ ADP)
* `upcoming_dfs_slate_ownership_projections` - Upcoming DFS Slate Ownership Projections
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
