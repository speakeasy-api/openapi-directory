# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/golf-v2/1.0/python
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


req = operations.CurrentSeasonRequest(
    format="JSON",
)
    
res = s.current_season(req)

if res.season is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `current_season` - Current Season
* `dfs_slates` - DFS Slates
* `injuries` - Injuries
* `injuries_historical` - Injuries (Historical)
* `leaderboard` - Leaderboard
* `news` - News
* `news_by_date` - News by Date
* `news_by_player` - News by Player
* `player` - Player
* `player_season_stats_w_world_golf_rankings` - Player Season Stats (w/ World Golf Rankings)
* `player_tournament_projected_stats_w_draftkings_salaries` - Player Tournament Projected Stats (w/ DraftKings Salaries)
* `player_tournament_stats_by_player` - Player Tournament Stats By Player
* `players` - Players
* `schedule` - Schedule
* `schedule_by_season` - Schedule by Season
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
