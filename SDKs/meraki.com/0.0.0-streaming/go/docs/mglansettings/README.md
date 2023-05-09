# MGLANSettings

### Available Operations

* [GetDeviceCellularGatewaySettings](#getdevicecellulargatewaysettings) - Show the LAN Settings of a MG
* [UpdateDeviceCellularGatewaySettings](#updatedevicecellulargatewaysettings) - Update the LAN Settings for a single MG.

## GetDeviceCellularGatewaySettings

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
    res, err := s.MGLANSettings.GetDeviceCellularGatewaySettings(ctx, operations.GetDeviceCellularGatewaySettingsRequest{
        Serial: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularGatewaySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularGatewaySettings

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
    res, err := s.MGLANSettings.UpdateDeviceCellularGatewaySettings(ctx, operations.UpdateDeviceCellularGatewaySettingsRequest{
        RequestBody: &operations.UpdateDeviceCellularGatewaySettingsRequestBody{
            FixedIPAssignments: []UpdateDeviceCellularGatewaySettingsRequestBodyFixedIPAssignments{
                operations.UpdateDeviceCellularGatewaySettingsRequestBodyFixedIPAssignments{
                    IP: "dignissimos",
                    Mac: "dicta",
                    Name: sdk.String("Wendell Frami"),
                },
            },
            ReservedIPRanges: []UpdateDeviceCellularGatewaySettingsRequestBodyReservedIPRanges{
                operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIPRanges{
                    Comment: "aperiam",
                    End: "ea",
                    Start: "quaerat",
                },
                operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIPRanges{
                    Comment: "consequuntur",
                    End: "repellendus",
                    Start: "officia",
                },
                operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIPRanges{
                    Comment: "maxime",
                    End: "dignissimos",
                    Start: "officia",
                },
                operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIPRanges{
                    Comment: "asperiores",
                    End: "nemo",
                    Start: "quae",
                },
            },
        },
        Serial: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularGatewaySettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
