# Manufacturers

### Available Operations

* [GetOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

## GetOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

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
    res, err := s.Manufacturers.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "perferendis",
        T0: sdk.String("soluta"),
        T1: sdk.String("tenetur"),
        Timespan: sdk.Float32(3682.39),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
