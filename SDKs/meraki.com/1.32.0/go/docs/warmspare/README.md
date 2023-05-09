# WarmSpare

### Available Operations

* [GetDeviceSwitchWarmSpare](#getdeviceswitchwarmspare) - Return warm spare configuration for a switch
* [GetNetworkApplianceWarmSpare](#getnetworkappliancewarmspare) - Return MX warm spare settings
* [SwapNetworkApplianceWarmSpare](#swapnetworkappliancewarmspare) - Swap MX primary and warm spare appliances
* [UpdateDeviceSwitchWarmSpare](#updatedeviceswitchwarmspare) - Update warm spare configuration for a switch
* [UpdateNetworkApplianceWarmSpare](#updatenetworkappliancewarmspare) - Update MX warm spare settings

## GetDeviceSwitchWarmSpare

Return warm spare configuration for a switch

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
    res, err := s.WarmSpare.GetDeviceSwitchWarmSpare(ctx, operations.GetDeviceSwitchWarmSpareRequest{
        Serial: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceWarmSpare

Return MX warm spare settings

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
    res, err := s.WarmSpare.GetNetworkApplianceWarmSpare(ctx, operations.GetNetworkApplianceWarmSpareRequest{
        NetworkID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SwapNetworkApplianceWarmSpare

Swap MX primary and warm spare appliances

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
    res, err := s.WarmSpare.SwapNetworkApplianceWarmSpare(ctx, operations.SwapNetworkApplianceWarmSpareRequest{
        NetworkID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SwapNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchWarmSpare

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

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
    res, err := s.WarmSpare.UpdateDeviceSwitchWarmSpare(ctx, operations.UpdateDeviceSwitchWarmSpareRequest{
        RequestBody: operations.UpdateDeviceSwitchWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("sapiente"),
        },
        Serial: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceWarmSpare

Update MX warm spare settings

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
    res, err := s.WarmSpare.UpdateNetworkApplianceWarmSpare(ctx, operations.UpdateNetworkApplianceWarmSpareRequest{
        RequestBody: operations.UpdateNetworkApplianceWarmSpareRequestBody{
            Enabled: false,
            SpareSerial: sdk.String("veritatis"),
            UplinkMode: sdk.String("rem"),
            VirtualIp1: sdk.String("nobis"),
            VirtualIp2: sdk.String("possimus"),
        },
        NetworkID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceWarmSpare200ApplicationJSONObject != nil {
        // handle response
    }
}
```
