# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/nhl-v3-projections/1.0/python
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


req = operations.DfsSlatesByDateRequest(
    date_="corrupti",
    format="JSON",
)
    
res = s.dfs_slates_by_date(req)

if res.dfs_slates is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `dfs_slates_by_date` - DFS Slates by Date
* `injured_players` - Injured Players
* `projected_player_game_stats_by_date_w_injuries_dfs_salaries` - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* `projected_player_game_stats_by_player_w_injuries_dfs_salaries` - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* `starting_goaltenders_by_date` - Starting Goaltenders by Date
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
