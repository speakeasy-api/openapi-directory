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
        BluetoothClientID: "quos",
        ConnectivityHistoryTimespan: sdk.Int64(398221),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "dolorem",
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
        EndingBefore: sdk.String("dolorem"),
        IncludeConnectivityHistory: sdk.Bool(false),
        NetworkID: "dolor",
        PerPage: sdk.Int64(186193),
        StartingAfter: sdk.String("ipsum"),
        T0: sdk.String("hic"),
        Timespan: sdk.Float32(5695.74),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
