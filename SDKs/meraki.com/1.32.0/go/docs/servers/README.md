# Servers

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
    res, err := s.Servers.GetNetworkSwitchDhcpV4ServersSeen(ctx, operations.GetNetworkSwitchDhcpV4ServersSeenRequest{
        EndingBefore: sdk.String("nam"),
        NetworkID: "cumque",
        PerPage: sdk.Int64(259370),
        StartingAfter: sdk.String("repellendus"),
        T0: sdk.String("cupiditate"),
        Timespan: sdk.Float32(4127.71),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
