# ConnectivityEvents

### Available Operations

* [GetNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.

## GetNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

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
    res, err := s.ConnectivityEvents.GetNetworkWirelessClientConnectivityEvents(ctx, operations.GetNetworkWirelessClientConnectivityEventsRequest{
        Band: operations.GetNetworkWirelessClientConnectivityEventsBandEnumSix.ToPointer(),
        ClientID: "doloremque",
        DeviceSerial: sdk.String("culpa"),
        EndingBefore: sdk.String("voluptate"),
        IncludedSeverities: []GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumBad,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumWarn,
        },
        NetworkID: "cum",
        PerPage: sdk.Int64(279166),
        SsidNumber: operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnumNine.ToPointer(),
        StartingAfter: sdk.String("distinctio"),
        T0: sdk.String("magnam"),
        T1: sdk.String("eius"),
        Timespan: sdk.Float32(741.9),
        Types: []GetNetworkWirelessClientConnectivityEventsTypesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumDisassoc,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAssoc,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumDisassoc,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
