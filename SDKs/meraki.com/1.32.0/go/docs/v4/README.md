# V4

### Available Operations

* [GetNetworkSwitchDhcpV4ServersSeen](#getnetworkswitchdhcpv4serversseen) - Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

## GetNetworkSwitchDhcpV4ServersSeen

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

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
    res, err := s.V4.GetNetworkSwitchDhcpV4ServersSeen(ctx, operations.GetNetworkSwitchDhcpV4ServersSeenRequest{
        EndingBefore: sdk.String("recusandae"),
        NetworkID: "officia",
        PerPage: sdk.Int64(391433),
        StartingAfter: sdk.String("quaerat"),
        T0: sdk.String("omnis"),
        Timespan: sdk.Float32(2984.42),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
