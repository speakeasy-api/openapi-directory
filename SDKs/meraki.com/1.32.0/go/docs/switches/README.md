# Switches

### Available Operations

* [GetOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

## GetOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

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
    res, err := s.Switches.GetOrganizationSummaryTopSwitchesByEnergyUsage(ctx, operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest{
        OrganizationID: "quae",
        T0: sdk.String("tempore"),
        T1: sdk.String("iste"),
        Timespan: sdk.Float32(3116.91),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
