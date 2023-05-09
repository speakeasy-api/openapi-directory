# Hotspot20

### Available Operations

* [GetNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [UpdateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID

## GetNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

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
    res, err := s.Hotspot20.GetNetworkWirelessSsidHotspot20(ctx, operations.GetNetworkWirelessSsidHotspot20Request{
        NetworkID: "possimus",
        Number: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

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
    res, err := s.Hotspot20.UpdateNetworkWirelessSsidHotspot20(ctx, operations.UpdateNetworkWirelessSsidHotspot20Request{
        RequestBody: &operations.UpdateNetworkWirelessSsidHotspot20RequestBody{
            Domains: []string{
                "voluptatem",
            },
            Enabled: sdk.Bool(false),
            MccMncs: []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("necessitatibus"),
                    Mnc: sdk.String("deleniti"),
                },
            },
            NaiRealms: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "soluta": "voluptatem",
                                "repellendus": "dignissimos",
                                "quaerat": "nisi",
                            },
                            ID: sdk.String("d2a7c7d1-ea0e-479f-a9bb-e5f179f650b1"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "quam": "aut",
                                "ducimus": "repudiandae",
                                "ducimus": "officiis",
                                "dolore": "neque",
                            },
                            ID: sdk.String("96713bac-ce07-42ab-9619-18d279c10c18"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "ab": "aliquid",
                                "doloribus": "repellendus",
                            },
                            ID: sdk.String("78be2621-2726-428f-a503-962867e72b3a"),
                        },
                    },
                    Realm: sdk.String("autem"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "labore": "rerum",
                            },
                            ID: sdk.String("157f9bb6-ef72-4a50-871d-99b661a7def1"),
                        },
                    },
                    Realm: sdk.String("commodi"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumOne.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "impedit": "optio",
                                "facilis": "sed",
                            },
                            ID: sdk.String("822b4a98-50ed-42f4-a1e9-c4ae55140e75"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "dolores": "laboriosam",
                                "earum": "voluptatem",
                            },
                            ID: sdk.String("03c2f029-4192-4518-8ee4-1c999f469f6f"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "quod": "sapiente",
                            },
                            ID: sdk.String("1a3f023c-669e-46a6-a601-2eba057988c6"),
                        },
                    },
                    Realm: sdk.String("in"),
                },
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "ipsum": "illo",
                                "aperiam": "sequi",
                                "maiores": "quae",
                                "officia": "ut",
                            },
                            ID: sdk.String("0c0f3ec8-688f-4d8e-86fc-03128f0aaaee"),
                        },
                    },
                    Realm: sdk.String("repudiandae"),
                },
            },
            NetworkAccessType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumChargeablePublicNetwork.ToPointer(),
            Operator: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator{
                Name: sdk.String("Leslie Thompson"),
            },
            RoamConsortOis: []string{
                "soluta",
                "hic",
            },
            Venue: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue{
                Name: sdk.String("Miss Jared Doyle"),
                Type: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGasStation.ToPointer(),
            },
        },
        NetworkID: "alias",
        Number: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```
