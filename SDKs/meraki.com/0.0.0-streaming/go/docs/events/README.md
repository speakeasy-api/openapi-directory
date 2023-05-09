# Events

### Available Operations

* [GetNetworkEvents](#getnetworkevents) - List the events for the network
* [GetNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description

## GetNetworkEvents

List the events for the network

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
    res, err := s.Events.GetNetworkEvents(ctx, operations.GetNetworkEventsRequest{
        ClientIP: sdk.String("aliquam"),
        ClientMac: sdk.String("odio"),
        ClientName: sdk.String("occaecati"),
        DeviceMac: sdk.String("commodi"),
        DeviceName: sdk.String("sapiente"),
        DeviceSerial: sdk.String("dolores"),
        EndingBefore: sdk.String("deserunt"),
        ExcludedEventTypes: []string{
            "accusantium",
            "porro",
        },
        IncludedEventTypes: []string{
            "quas",
            "praesentium",
        },
        NetworkID: "consequuntur",
        PerPage: sdk.Int64(536178),
        ProductType: sdk.String("fugit"),
        SmDeviceMac: sdk.String("fuga"),
        SmDeviceName: sdk.String("mollitia"),
        StartingAfter: sdk.String("incidunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkEventsEventTypes

List the event type to human-readable description

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
    res, err := s.Events.GetNetworkEventsEventTypes(ctx, operations.GetNetworkEventsEventTypesRequest{
        NetworkID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkEventsEventTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
