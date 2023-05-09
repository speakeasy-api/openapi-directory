# SubnetPool

### Available Operations

* [GetNetworkCellularGatewaySubnetPool](#getnetworkcellulargatewaysubnetpool) - Return the subnet pool and mask configured for MGs in the network.
* [UpdateNetworkCellularGatewaySubnetPool](#updatenetworkcellulargatewaysubnetpool) - Update the subnet pool and mask configuration for MGs in the network.

## GetNetworkCellularGatewaySubnetPool

Return the subnet pool and mask configured for MGs in the network.

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
    res, err := s.SubnetPool.GetNetworkCellularGatewaySubnetPool(ctx, operations.GetNetworkCellularGatewaySubnetPoolRequest{
        NetworkID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewaySubnetPool

Update the subnet pool and mask configuration for MGs in the network.

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
    res, err := s.SubnetPool.UpdateNetworkCellularGatewaySubnetPool(ctx, operations.UpdateNetworkCellularGatewaySubnetPoolRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewaySubnetPoolRequestBody{
            Cidr: sdk.String("eligendi"),
            Mask: sdk.Int64(7771),
        },
        NetworkID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject != nil {
        // handle response
    }
}
```
