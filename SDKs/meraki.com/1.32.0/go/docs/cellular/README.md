# Cellular

### Available Operations

* [GetDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [UpdateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

## GetDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

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
    res, err := s.Cellular.GetDeviceCellularSims(ctx, operations.GetDeviceCellularSimsRequest{
        Serial: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

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
    res, err := s.Cellular.UpdateDeviceCellularSims(ctx, operations.UpdateDeviceCellularSimsRequest{
        RequestBody: &operations.UpdateDeviceCellularSimsRequestBody{
            SimFailover: &operations.UpdateDeviceCellularSimsRequestBodySimFailover{
                Enabled: sdk.Bool(false),
            },
            Sims: []UpdateDeviceCellularSimsRequestBodySims{
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "provident",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("quas"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Scotty_Paucek62"),
                            },
                            Name: "Tommie Feil",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "repellendus",
                                "omnis",
                                "delectus",
                                "odio",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("voluptatibus"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Jamey_Moen"),
                            },
                            Name: "Muriel Durgan",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "non",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("porro"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Natalie.Beer87"),
                            },
                            Name: "Ms. Billie Boyle",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim2.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "laudantium",
                                "modi",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("magnam"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Sadye_Waelchi31"),
                            },
                            Name: "Wade Berge",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "laboriosam",
                                "ratione",
                                "blanditiis",
                                "quidem",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("illum"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Raleigh20"),
                            },
                            Name: "Alison Hodkiewicz",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "fugit",
                                "dolorem",
                                "quidem",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("molestiae"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Berta53"),
                            },
                            Name: "Nettie Kilback",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "eos",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("impedit"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Joey94"),
                            },
                            Name: "Bruce Roob Jr.",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "iusto",
                                "inventore",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("voluptate"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Corine.Bechtelar"),
                            },
                            Name: "Allison Streich",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim2.ToPointer(),
                },
            },
        },
        Serial: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```
