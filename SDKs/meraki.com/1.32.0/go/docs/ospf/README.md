# Ospf

### Available Operations

* [GetNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [UpdateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration

## GetNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

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
    res, err := s.Ospf.GetNetworkSwitchRoutingOspf(ctx, operations.GetNetworkSwitchRoutingOspfRequest{
        NetworkID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

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
    res, err := s.Ospf.UpdateNetworkSwitchRoutingOspf(ctx, operations.UpdateNetworkSwitchRoutingOspfRequest{
        RequestBody: &operations.UpdateNetworkSwitchRoutingOspfRequestBody{
            Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas{
                    AreaID: "eum",
                    AreaName: "molestias",
                    AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNssa,
                },
            },
            DeadTimerInSeconds: sdk.Int64(757896),
            Enabled: sdk.Bool(false),
            HelloTimerInSeconds: sdk.Int64(760155),
            Md5AuthenticationEnabled: sdk.Bool(false),
            Md5AuthenticationKey: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey{
                ID: sdk.Int64(612221),
                Passphrase: sdk.String("id"),
            },
            V3: &operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3{
                Areas: []UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "laborum",
                        AreaName: "qui",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumStub,
                    },
                    operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas{
                        AreaID: "officiis",
                        AreaName: "quo",
                        AreaType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnumNssa,
                    },
                },
                DeadTimerInSeconds: sdk.Int64(473254),
                Enabled: sdk.Bool(false),
                HelloTimerInSeconds: sdk.Int64(223426),
            },
        },
        NetworkID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject != nil {
        // handle response
    }
}
```
