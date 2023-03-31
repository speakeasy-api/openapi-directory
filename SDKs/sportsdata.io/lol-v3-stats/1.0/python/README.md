# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/sportsdata.io/lol-v3-stats/1.0/python
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
* `champions` - Champions
* `competition_fixtures_league_details` - Competition Fixtures (League Details)
* `competitions_leagues` - Competitions (Leagues)
* `games_by_date` - Games by Date
* `items` - Items
* `memberships_active` - Memberships (Active)
* `memberships_by_team_active` - Memberships by Team (Active)
* `memberships_by_team_historical` - Memberships by Team (Historical)
* `memberships_historical` - Memberships (Historical)
* `player` - Player
* `players` - Players
* `players_by_team` - Players by Team
* `schedule` - Schedule
* `season_teams` - Season Teams
* `spells` - Spells
* `standings` - Standings
* `teams` - Teams
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
