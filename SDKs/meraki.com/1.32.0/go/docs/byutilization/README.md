# ByUtilization

### Available Operations

* [GetOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.

## GetOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

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
    res, err := s.ByUtilization.GetOrganizationSummaryTopAppliancesByUtilization(ctx, operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest{
        OrganizationID: "sunt",
        T0: sdk.String("molestias"),
        T1: sdk.String("beatae"),
        Timespan: sdk.Float32(4202.33),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
