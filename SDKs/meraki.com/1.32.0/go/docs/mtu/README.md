# Mtu

### Available Operations

* [GetNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [UpdateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration

## GetNetworkSwitchMtu

Return the MTU configuration

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
    res, err := s.Mtu.GetNetworkSwitchMtu(ctx, operations.GetNetworkSwitchMtuRequest{
        NetworkID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchMtu

Update the MTU configuration

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
    res, err := s.Mtu.UpdateNetworkSwitchMtu(ctx, operations.UpdateNetworkSwitchMtuRequest{
        RequestBody: &operations.UpdateNetworkSwitchMtuRequestBody{
            DefaultMtuSize: sdk.Int64(458027),
            Overrides: []UpdateNetworkSwitchMtuRequestBodyOverrides{
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 886518,
                    SwitchProfiles: []string{
                        "sint",
                        "commodi",
                        "qui",
                        "possimus",
                    },
                    Switches: []string{
                        "consectetur",
                        "debitis",
                        "itaque",
                        "recusandae",
                    },
                },
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 489593,
                    SwitchProfiles: []string{
                        "consectetur",
                        "molestias",
                        "nostrum",
                        "quo",
                    },
                    Switches: []string{
                        "natus",
                        "in",
                    },
                },
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 5694,
                    SwitchProfiles: []string{
                        "dicta",
                        "harum",
                        "beatae",
                        "culpa",
                    },
                    Switches: []string{
                        "temporibus",
                        "quidem",
                        "impedit",
                    },
                },
                operations.UpdateNetworkSwitchMtuRequestBodyOverrides{
                    MtuSize: 939353,
                    SwitchProfiles: []string{
                        "saepe",
                        "et",
                    },
                    Switches: []string{
                        "cum",
                        "excepturi",
                        "aperiam",
                    },
                },
            },
        },
        NetworkID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchMtu200ApplicationJSONObject != nil {
        // handle response
    }
}
```
