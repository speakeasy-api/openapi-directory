# RadioSettings

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
    res, err := s.RadioSettings.CreateNetworkWirelessRfProfile(ctx, operations.CreateNetworkWirelessRfProfileRequest{
        RequestBody: operations.CreateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumAp,
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("nemo"),
                MaxPower: sdk.Int64(745233),
                MinBitrate: sdk.Int64(726227),
                MinPower: sdk.Int64(526907),
                Rxsop: sdk.Int64(678060),
                ValidAutoChannels: []int64{
                    144691,
                    545,
                },
            },
            MinBitrateType: operations.CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand.ToPointer(),
            Name: "Anna Bergnaum",
            TwoFourGhzSettings: &operations.CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(348357),
                MinBitrate: sdk.Float32(9323.94),
                MinPower: sdk.Int64(88248),
                Rxsop: sdk.Int64(215398),
                ValidAutoChannels: []int64{
                    858338,
                    714376,
                    802894,
                },
            },
        },
        NetworkID: "quia",
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
    res, err := s.RadioSettings.DeleteNetworkWirelessRfProfile(ctx, operations.DeleteNetworkWirelessRfProfileRequest{
        NetworkID: "quia",
        RfProfileID: "nostrum",
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
    res, err := s.RadioSettings.GetNetworkWirelessRfProfile(ctx, operations.GetNetworkWirelessRfProfileRequest{
        NetworkID: "omnis",
        RfProfileID: "libero",
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
    res, err := s.RadioSettings.GetNetworkWirelessRfProfiles(ctx, operations.GetNetworkWirelessRfProfilesRequest{
        IncludeTemplateProfiles: sdk.Bool(false),
        NetworkID: "dicta",
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
    res, err := s.RadioSettings.UpdateNetworkWirelessRfProfile(ctx, operations.UpdateNetworkWirelessRfProfileRequest{
        RequestBody: &operations.UpdateNetworkWirelessRfProfileRequestBody{
            ApBandSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettings{
                BandOperationMode: operations.UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnumFiveghz.ToPointer(),
                BandSteeringEnabled: sdk.Bool(false),
            },
            BandSelectionType: operations.UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnumSsid.ToPointer(),
            ClientBalancingEnabled: sdk.Bool(false),
            FiveGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings{
                ChannelWidth: sdk.String("fugiat"),
                MaxPower: sdk.Int64(637462),
                MinBitrate: sdk.Int64(554603),
                MinPower: sdk.Int64(811939),
                Rxsop: sdk.Int64(25756),
                ValidAutoChannels: []int64{
                    57320,
                    914864,
                },
            },
            MinBitrateType: operations.UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnumBand.ToPointer(),
            Name: sdk.String("Lena Greenholt"),
            TwoFourGhzSettings: &operations.UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings{
                AxEnabled: sdk.Bool(false),
                MaxPower: sdk.Int64(32273),
                MinBitrate: sdk.Float32(4181.09),
                MinPower: sdk.Int64(456688),
                Rxsop: sdk.Int64(172951),
                ValidAutoChannels: []int64{
                    107210,
                    668606,
                    817339,
                    545918,
                },
            },
        },
        NetworkID: "molestiae",
        RfProfileID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessRfProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
