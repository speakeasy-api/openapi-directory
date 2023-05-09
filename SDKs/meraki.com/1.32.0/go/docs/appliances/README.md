# Appliances

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
    res, err := s.Appliances.GetOrganizationSummaryTopAppliancesByUtilization(ctx, operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest{
        OrganizationID: "dolorem",
        T0: sdk.String("architecto"),
        T1: sdk.String("aperiam"),
        Timespan: sdk.Float32(1341.73),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
