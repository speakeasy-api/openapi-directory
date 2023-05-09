# MeshStatuses

### Available Operations

* [GetNetworkWirelessMeshStatuses](#getnetworkwirelessmeshstatuses) - List wireless mesh statuses for repeaters

## GetNetworkWirelessMeshStatuses

List wireless mesh statuses for repeaters

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
    res, err := s.MeshStatuses.GetNetworkWirelessMeshStatuses(ctx, operations.GetNetworkWirelessMeshStatusesRequest{
        EndingBefore: sdk.String("culpa"),
        NetworkID: "blanditiis",
        PerPage: sdk.Int64(313058),
        StartingAfter: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessMeshStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
