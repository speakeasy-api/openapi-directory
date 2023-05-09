# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/lol-v3-stats/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.AreasCountries(ctx, operations.AreasCountriesRequest{
        Format: operations.AreasCountriesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AreasCountries](docs/sdk/README.md#areascountries) - Areas (Countries)
* [BoxScore](docs/sdk/README.md#boxscore) - Box Score
* [BoxScoresByDate](docs/sdk/README.md#boxscoresbydate) - Box Scores by Date
* [Champions](docs/sdk/README.md#champions) - Champions
* [CompetitionFixturesLeagueDetails](docs/sdk/README.md#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [CompetitionsLeagues](docs/sdk/README.md#competitionsleagues) - Competitions (Leagues)
* [GamesByDate](docs/sdk/README.md#gamesbydate) - Games by Date
* [Items](docs/sdk/README.md#items) - Items
* [MembershipsActive](docs/sdk/README.md#membershipsactive) - Memberships (Active)
* [MembershipsByTeamActive](docs/sdk/README.md#membershipsbyteamactive) - Memberships by Team (Active)
* [MembershipsByTeamHistorical](docs/sdk/README.md#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [MembershipsHistorical](docs/sdk/README.md#membershipshistorical) - Memberships (Historical)
* [Player](docs/sdk/README.md#player) - Player
* [Players](docs/sdk/README.md#players) - Players
* [PlayersByTeam](docs/sdk/README.md#playersbyteam) - Players by Team
* [Schedule](docs/sdk/README.md#schedule) - Schedule
* [SeasonTeams](docs/sdk/README.md#seasonteams) - Season Teams
* [Spells](docs/sdk/README.md#spells) - Spells
* [Standings](docs/sdk/README.md#standings) - Standings
* [Teams](docs/sdk/README.md#teams) - Teams
* [Venues](docs/sdk/README.md#venues) - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
