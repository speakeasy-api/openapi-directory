# BySwitch

### Available Operations

* [GetOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch

## GetOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

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
    res, err := s.BySwitch.GetOrganizationSwitchPortsBySwitch(ctx, operations.GetOrganizationSwitchPortsBySwitchRequest{
        ConfigurationUpdatedAfter: sdk.String("quisquam"),
        EndingBefore: sdk.String("facere"),
        Mac: sdk.String("dignissimos"),
        Macs: []string{
            "provident",
            "dolor",
            "sint",
        },
        Name: sdk.String("Deborah Keeling"),
        NetworkIds: []string{
            "assumenda",
            "explicabo",
        },
        OrganizationID: "fugiat",
        PerPage: sdk.Int64(41306),
        PortProfileIds: []string{
            "alias",
        },
        Serial: sdk.String("velit"),
        Serials: []string{
            "quis",
            "velit",
        },
        StartingAfter: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
