# Sims

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
    res, err := s.Sims.GetDeviceCellularSims(ctx, operations.GetDeviceCellularSimsRequest{
        Serial: "labore",
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
    res, err := s.Sims.UpdateDeviceCellularSims(ctx, operations.UpdateDeviceCellularSimsRequest{
        RequestBody: &operations.UpdateDeviceCellularSimsRequestBody{
            SimFailover: &operations.UpdateDeviceCellularSimsRequestBodySimFailover{
                Enabled: sdk.Bool(false),
            },
            Sims: []UpdateDeviceCellularSimsRequestBodySims{
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "autem",
                                "corporis",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("quos"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Lula4"),
                            },
                            Name: "Natasha Littel",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "reprehenderit",
                                "in",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("minima"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Niko_Howe"),
                            },
                            Name: "Lorena Erdman",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "rem",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("reprehenderit"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Cristobal_Kilback93"),
                            },
                            Name: "Shirley Christiansen",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim1.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "officia",
                                "provident",
                                "rerum",
                                "quaerat",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("sequi"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Hershel59"),
                            },
                            Name: "Mr. Danielle Feeney",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "rerum",
                                "iusto",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("error"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Agnes.Boyle43"),
                            },
                            Name: "Gregory Goyette",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "nostrum",
                                "laboriosam",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("dicta"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumNone.ToPointer(),
                                Username: sdk.String("Cortney.Hansen50"),
                            },
                            Name: "Jerald Schneider",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim2.ToPointer(),
                },
                operations.UpdateDeviceCellularSimsRequestBodySims{
                    Apns: []UpdateDeviceCellularSimsRequestBodySimsApns{
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "eligendi",
                                "ullam",
                                "impedit",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("porro"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumChap.ToPointer(),
                                Username: sdk.String("Joanne.Stark"),
                            },
                            Name: "Ryan McLaughlin",
                        },
                        operations.UpdateDeviceCellularSimsRequestBodySimsApns{
                            AllowedIPTypes: []string{
                                "non",
                                "itaque",
                            },
                            Authentication: &operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication{
                                Password: sdk.String("dolores"),
                                Type: operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnumPap.ToPointer(),
                                Username: sdk.String("Omer77"),
                            },
                            Name: "Elaine Harber",
                        },
                    },
                    IsPrimary: sdk.Bool(false),
                    Slot: operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnumSim2.ToPointer(),
                },
            },
        },
        Serial: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceCellularSims200ApplicationJSONObject != nil {
        // handle response
    }
}
```
