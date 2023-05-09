# Lan

### Available Operations

* [GetDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [UpdateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.

## GetDeviceCellularGatewayLan

Show the LAN Settings of a MG

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
    res, err := s.Lan.GetDeviceCellularGatewayLan(ctx, operations.GetDeviceCellularGatewayLanRequest{
        Serial: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

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
    res, err := s.Lan.UpdateDeviceCellularGatewayLan(ctx, operations.UpdateDeviceCellularGatewayLanRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewayLanRequestBody{
            FixedIPAssignments: []UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "voluptate",
                    Mac: "vel",
                    Name: sdk.String("Monique Gusikowski"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "facere",
                    Mac: "illum",
                    Name: sdk.String("Miss Betsy Nader"),
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments{
                    IP: "itaque",
                    Mac: "veniam",
                    Name: sdk.String("Phil Ratke"),
                },
            },
            ReservedIPRanges: []UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "labore",
                    End: "nobis",
                    Start: "animi",
                },
                operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges{
                    Comment: "illo",
                    End: "eligendi",
                    Start: "facilis",
                },
            },
        },
        Serial: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewayLan200ApplicationJSONObject != nil {
        // handle response
    }
}
```
