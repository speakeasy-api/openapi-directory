# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/csgo-v3-scores/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.AreasCountriesRequest{
        Format: "json",
    }

    ctx := context.Background()
    res, err := s.AreasCountries(ctx, req)
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

### SDK SDK

* `AreasCountries` - Areas (Countries)
* `CompetitionFixturesLeagueDetails` - Competition Fixtures (League Details)
* `CompetitionsLeagues` - Competitions (Leagues)
* `GamesByDate` - Games by Date
* `MembershipsActive` - Memberships (Active)
* `MembershipsByTeamActive` - Memberships by Team (Active)
* `MembershipsByTeamHistorical` - Memberships by Team (Historical)
* `MembershipsHistorical` - Memberships (Historical)
* `Player` - Player
* `Players` - Players
* `PlayersByTeam` - Players by Team
* `Schedule` - Schedule
* `SeasonTeams` - Season Teams
* `Standings` - Standings
* `Teams` - Teams
* `Venues` - Venues
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
