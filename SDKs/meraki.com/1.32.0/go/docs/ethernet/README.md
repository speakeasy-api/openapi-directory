# Ethernet

### Available Operations

* [GetOrganizationWirelessDevicesEthernetStatuses](#getorganizationwirelessdevicesethernetstatuses) - Endpoint to see power status for wireless devices

## GetOrganizationWirelessDevicesEthernetStatuses

Endpoint to see power status for wireless devices

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
    res, err := s.Ethernet.GetOrganizationWirelessDevicesEthernetStatuses(ctx, operations.GetOrganizationWirelessDevicesEthernetStatusesRequest{
        EndingBefore: sdk.String("dolor"),
        NetworkIds: []string{
            "odio",
        },
        OrganizationID: "magni",
        PerPage: sdk.Int64(494136),
        StartingAfter: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
