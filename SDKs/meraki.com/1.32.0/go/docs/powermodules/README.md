# PowerModules

### Available Operations

* [GetOrganizationDevicesPowerModulesStatusesByDevice](#getorganizationdevicespowermodulesstatusesbydevice) - List the power status information for devices in an organization

## GetOrganizationDevicesPowerModulesStatusesByDevice

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.PowerModules.GetOrganizationDevicesPowerModulesStatusesByDevice(ctx, operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest{
        EndingBefore: sdk.String("consectetur"),
        NetworkIds: []string{
            "aut",
            "atque",
            "maxime",
            "alias",
        },
        OrganizationID: "aliquid",
        PerPage: sdk.Int64(911003),
        ProductTypes: []string{
            "rem",
            "incidunt",
            "fuga",
        },
        Serials: []string{
            "praesentium",
            "quae",
            "iste",
        },
        StartingAfter: sdk.String("facilis"),
        Tags: []string{
            "maxime",
            "reprehenderit",
            "alias",
            "rerum",
        },
        TagsFilterType: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesPowerModulesStatusesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
