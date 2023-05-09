# RfProfiles

### Available Operations

* [CreateNetworkWirelessRfProfile](#createnetworkwirelessrfprofile) - Creates new RF profile for this network
* [DeleteNetworkWirelessRfProfile](#deletenetworkwirelessrfprofile) - Delete a RF Profile
* [GetNetworkWirelessRfProfile](#getnetworkwirelessrfprofile) - Return a RF profile
* [GetNetworkWirelessRfProfiles](#getnetworkwirelessrfprofiles) - List the non-basic RF profiles for this network
* [UpdateNetworkWirelessRfProfile](#updatenetworkwirelessrfprofile) - Updates specified RF profile for this network

## CreateNetworkWirelessRfProfile

Creates new RF profile for this network

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
    res, err := s.RfProfiles.CreateNetworkWirelessRfProfile(ctx, operations.CreateNetworkWirelessRfProfileRequest{
        RequestBody: operations.CreateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumTwo4ghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp,
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("non"),
                MaxPower: sdk.Int64(202257),
                MinBitrate: sdk.Int64(406705),
                MinPower: sdk.Int64(220715),
                Rxsop: sdk.Int64(502420),
                ValidAutoChannels: []int64{
                    439715,
                },
            },
            MinBitrateType: operations.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand.ToPointer(),
            Name: "Teri Altenwerth II",
            PerSsidSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2454.63),
                },
                One: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9049.11),
                },
                Ten: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5849.95),
                },
                Eleven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3452.33),
                },
                Twelve: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1976.77),
                },
                Thirteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9129.2),
                },
                Fourteen: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2048.1),
                },
                Two: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(653.29),
                },
                Three: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6305.36),
                },
                Four: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(2770.94),
                },
                Five: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1778.92),
                },
                Six: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6050.91),
                },
                Seven: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumTwo4ghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(4563.72),
                },
                Eight: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(1570.7),
                },
                Nine: &operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5744.57),
                },
            },
            Transmission: &operations.CreateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(355431),
                MinBitrate: sdk.Float32(6672.32),
                MinPower: sdk.Int64(617052),
                Rxsop: sdk.Int64(693777),
                ValidAutoChannels: []int64{
                    252144,
                    262429,
                },
            },
        },
        NetworkID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessRfProfile201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkWirelessRfProfile

Delete a RF Profile

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
    res, err := s.RfProfiles.DeleteNetworkWirelessRfProfile(ctx, operations.DeleteNetworkWirelessRfProfileRequest{
        NetworkID: "nisi",
        RfProfileID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfile

Return a RF profile

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
    res, err := s.RfProfiles.GetNetworkWirelessRfProfile(ctx, operations.GetNetworkWirelessRfProfileRequest{
        NetworkID: "modi",
        RfProfileID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessRfProfiles

List the non-basic RF profiles for this network

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
    res, err := s.RfProfiles.GetNetworkWirelessRfProfiles(ctx, operations.GetNetworkWirelessRfProfilesRequest{
        IncludeTemplateProfiles: sdk.Bool(false),
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessRfProfiles200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessRfProfile

Updates specified RF profile for this network

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
    res, err := s.RfProfiles.UpdateNetworkWirelessRfProfile(ctx, operations.UpdateNetworkWirelessRfProfileRequest{
        RequestBody: &operations.UpdateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp.ToPointer(),
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("excepturi"),
                MaxPower: sdk.Int64(653749),
                MinBitrate: sdk.Int64(531387),
                MinPower: sdk.Int64(820167),
                Rxsop: sdk.Int64(998014),
                ValidAutoChannels: []int64{
                    895939,
                    169236,
                },
            },
            MinBitrateType: operations.UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumSsid.ToPointer(),
            Name: sdk.String("Josephine Rutherford"),
            PerSsidSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings{
                Zero: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings0BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7216.13),
                },
                One: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings1BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9375.88),
                },
                Ten: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings10BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5256.1),
                },
                Eleven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings11BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(16.94),
                },
                Twelve: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings12BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3302.69),
                },
                Thirteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings13BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6455.76),
                },
                Fourteen: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings14BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(249.9),
                },
                Two: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings2BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9962.87),
                },
                Three: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings3BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(6712.67),
                },
                Four: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings4BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3825.84),
                },
                Five: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings5BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(5230.47),
                },
                Six: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings6BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(9705.34),
                },
                Seven: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings7BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7191.97),
                },
                Eight: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings8BandOperationModeEnumFiveghz.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(7936.12),
                },
                Nine: &operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9{
                    BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyPerSsidSettings9BandOperationModeEnumDual.ToPointer(),
                    BandSteeringEnabled: sdk.Bool(false),
                    MinBitrate: sdk.Float32(3523.87),
                },
            },
            Transmission: &operations.UpdateNetworkWirelessRfProfileRequestBodyTransmission{
                Enabled: sdk.Bool(false),
            },
            TwoFourGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(435743),
                MinBitrate: sdk.Float32(2585.71),
                MinPower: sdk.Int64(913584),
                Rxsop: sdk.Int64(686722),
                ValidAutoChannels: []int64{
                    542059,
                    746547,
                    781899,
                    202049,
                },
            },
        },
        NetworkID: "harum",
        RfProfileID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
