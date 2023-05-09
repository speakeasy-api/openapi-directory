# ChangeLog

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
    res, err := s.ChangeLog.GetOrganizationConfigurationChanges(ctx, operations.GetOrganizationConfigurationChangesRequest{
        AdminID: sdk.String("odio"),
        EndingBefore: sdk.String("occaecati"),
        NetworkID: sdk.String("voluptatibus"),
        OrganizationID: "quisquam",
        PerPage: sdk.Int64(876506),
        StartingAfter: sdk.String("omnis"),
        T0: sdk.String("quis"),
        T1: sdk.String("ipsum"),
        Timespan: sdk.Float32(9615.71),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigurationChanges200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
