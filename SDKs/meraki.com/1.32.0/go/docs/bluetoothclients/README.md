# BluetoothClients

### Available Operations

* [GetNetworkBluetoothClient](#getnetworkbluetoothclient) - Return a Bluetooth client
* [GetNetworkBluetoothClients](#getnetworkbluetoothclients) - List the Bluetooth clients seen by APs in this network

## GetNetworkBluetoothClient

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

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
    res, err := s.BluetoothClients.GetNetworkBluetoothClient(ctx, operations.GetNetworkBluetoothClientRequest{
        BluetoothClientID: "cumque",
        ConnectivityHistoryTimespan: sdk.Int64(743795),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothClient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkBluetoothClients

List the Bluetooth clients seen by APs in this network

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
    res, err := s.BluetoothClients.GetNetworkBluetoothClients(ctx, operations.GetNetworkBluetoothClientsRequest{
        EndingBefore: sdk.String("laboriosam"),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "nam",
        PerPage: sdk.Int64(315387),
        StartingAfter: sdk.String("maiores"),
        T0: sdk.String("consectetur"),
        Timespan: sdk.Float32(8988.26),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
