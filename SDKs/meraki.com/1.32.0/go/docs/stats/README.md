# Stats

### Available Operations

* [GetOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization

## GetOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

### Example Usage

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Stats.GetOrganizationApplianceVpnStats(ctx, operations.GetOrganizationApplianceVpnStatsRequest{
        EndingBefore: sdk.String("harum"),
        NetworkIds: []string{
            "accusamus",
        },
        OrganizationID: "repellat",
        PerPage: sdk.Int64(295716),
        StartingAfter: sdk.String("voluptatibus"),
        T0: sdk.String("dolore"),
        T1: sdk.String("voluptatem"),
        Timespan: sdk.Float32(813.64),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
