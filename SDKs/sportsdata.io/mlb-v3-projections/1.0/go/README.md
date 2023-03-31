# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/mlb-v3-projections/1.0/go
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

    req := operations.DepthChartsRequest{
        Format: "JSON",
    }

    ctx := context.Background()
    res, err := s.DepthCharts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDepthCharts != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DepthCharts` - Depth Charts
* `DfsSlatesByDate` - DFS Slates by Date
* `InjuredPlayers` - Injured Players
* `ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries` - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* `ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries` - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* `ProjectedPlayerSeasonStatsWithAdp` - Projected Player Season Stats (with ADP)
* `StartingLineupsByDate` - Starting Lineups by Date
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
