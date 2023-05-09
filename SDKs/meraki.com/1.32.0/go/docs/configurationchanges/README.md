# ConfigurationChanges

### Available Operations

* [GetOrganizationConfigurationChanges](#getorganizationconfigurationchanges) - View the Change Log for your organization

## GetOrganizationConfigurationChanges

View the Change Log for your organization

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
    res, err := s.ConfigurationChanges.GetOrganizationConfigurationChanges(ctx, operations.GetOrganizationConfigurationChangesRequest{
        AdminID: sdk.String("laborum"),
        EndingBefore: sdk.String("dolor"),
        NetworkID: sdk.String("ad"),
        OrganizationID: "illum",
        PerPage: sdk.Int64(22966),
        StartingAfter: sdk.String("molestias"),
        T0: sdk.String("voluptas"),
        T1: sdk.String("expedita"),
        Timespan: sdk.Float32(3753.78),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigurationChanges200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
