# DscpToCosMappings

### Available Operations

* [GetNetworkSwitchDscpToCosMappings](#getnetworkswitchdscptocosmappings) - Return the DSCP to CoS mappings
* [UpdateNetworkSwitchDscpToCosMappings](#updatenetworkswitchdscptocosmappings) - Update the DSCP to CoS mappings

## GetNetworkSwitchDscpToCosMappings

Return the DSCP to CoS mappings

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
    res, err := s.DscpToCosMappings.GetNetworkSwitchDscpToCosMappings(ctx, operations.GetNetworkSwitchDscpToCosMappingsRequest{
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDscpToCosMappings

Update the DSCP to CoS mappings

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
    res, err := s.DscpToCosMappings.UpdateNetworkSwitchDscpToCosMappings(ctx, operations.UpdateNetworkSwitchDscpToCosMappingsRequest{
        RequestBody: operations.UpdateNetworkSwitchDscpToCosMappingsRequestBody{
            Mappings: []UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 721053,
                    Dscp: 87915,
                    Title: sdk.String("Miss"),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 906213,
                    Dscp: 68620,
                    Title: sdk.String("Dr."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 772602,
                    Dscp: 997706,
                    Title: sdk.String("Ms."),
                },
                operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings{
                    Cos: 777889,
                    Dscp: 240080,
                    Title: sdk.String("Mrs."),
                },
            },
        },
        NetworkID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDscpToCosMappings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
