# ByEnergyUsage

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
    res, err := s.ByEnergyUsage.GetOrganizationSummaryTopSwitchesByEnergyUsage(ctx, operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest{
        OrganizationID: "laborum",
        T0: sdk.String("perspiciatis"),
        T1: sdk.String("voluptates"),
        Timespan: sdk.Float32(4288.1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
