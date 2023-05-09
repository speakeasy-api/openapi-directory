# FirewalledServices

### Available Operations

* [GetNetworkFirewalledService](#getnetworkfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkFirewalledServices](#getnetworkfirewalledservices) - List the appliance services and their accessibility rules

## GetNetworkFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

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
    res, err := s.FirewalledServices.GetNetworkFirewalledService(ctx, operations.GetNetworkFirewalledServiceRequest{
        NetworkID: "explicabo",
        Service: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirewalledServices

List the appliance services and their accessibility rules

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
    res, err := s.FirewalledServices.GetNetworkFirewalledServices(ctx, operations.GetNetworkFirewalledServicesRequest{
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirewalledServices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
