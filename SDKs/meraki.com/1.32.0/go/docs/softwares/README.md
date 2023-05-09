# Softwares

### Available Operations

* [GetNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [GetNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user

## GetNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

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
    res, err := s.Softwares.GetNetworkSmDeviceSoftwares(ctx, operations.GetNetworkSmDeviceSoftwaresRequest{
        DeviceID: "possimus",
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmDeviceSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSmUserSoftwares

Get a list of softwares associated with a user

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
    res, err := s.Softwares.GetNetworkSmUserSoftwares(ctx, operations.GetNetworkSmUserSoftwaresRequest{
        NetworkID: "quo",
        UserID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmUserSoftwares200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
