# Addresses

### Available Operations

* [GetOrganizationDevicesUplinksAddressesByDevice](#getorganizationdevicesuplinksaddressesbydevice) - List the current uplink addresses for devices in an organization.

## GetOrganizationDevicesUplinksAddressesByDevice

List the current uplink addresses for devices in an organization.

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
    res, err := s.Addresses.GetOrganizationDevicesUplinksAddressesByDevice(ctx, operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest{
        EndingBefore: sdk.String("dolore"),
        NetworkIds: []string{
            "asperiores",
        },
        OrganizationID: "adipisci",
        PerPage: sdk.Int64(249420),
        ProductTypes: []string{
            "beatae",
        },
        Serials: []string{
            "a",
            "debitis",
        },
        StartingAfter: sdk.String("consectetur"),
        Tags: []string{
            "harum",
            "laboriosam",
        },
        TagsFilterType: operations.GetOrganizationDevicesUplinksAddressesByDeviceTagsFilterTypeEnumWithAllTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesUplinksAddressesByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
