# TrafficHistory

### Available Operations

* [GetNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time

## GetNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.TrafficHistory.GetNetworkClientTrafficHistory(ctx, operations.GetNetworkClientTrafficHistoryRequest{
        ClientID: "necessitatibus",
        EndingBefore: sdk.String("quis"),
        NetworkID: "et",
        PerPage: sdk.Int64(54595),
        StartingAfter: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientTrafficHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
