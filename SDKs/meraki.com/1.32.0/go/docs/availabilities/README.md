# Availabilities

### Available Operations

* [GetOrganizationDevicesAvailabilities](#getorganizationdevicesavailabilities) - List the availability information for devices in an organization

## GetOrganizationDevicesAvailabilities

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

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
    res, err := s.Availabilities.GetOrganizationDevicesAvailabilities(ctx, operations.GetOrganizationDevicesAvailabilitiesRequest{
        EndingBefore: sdk.String("tempora"),
        NetworkIds: []string{
            "omnis",
        },
        OrganizationID: "illum",
        PerPage: sdk.Int64(526584),
        ProductTypes: []string{
            "deleniti",
            "modi",
            "earum",
            "architecto",
        },
        Serials: []string{
            "labore",
            "maiores",
        },
        StartingAfter: sdk.String("sequi"),
        Tags: []string{
            "consequatur",
            "esse",
            "debitis",
            "facere",
        },
        TagsFilterType: operations.GetOrganizationDevicesAvailabilitiesTagsFilterTypeEnumWithAnyTags.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesAvailabilities200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
