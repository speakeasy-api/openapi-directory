# Stp

### Available Operations

* [GetNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [UpdateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings

## GetNetworkSwitchStp

Returns STP settings

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
    res, err := s.Stp.GetNetworkSwitchStp(ctx, operations.GetNetworkSwitchStpRequest{
        NetworkID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchStp

Updates STP settings

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
    res, err := s.Stp.UpdateNetworkSwitchStp(ctx, operations.UpdateNetworkSwitchStpRequest{
        RequestBody: &operations.UpdateNetworkSwitchStpRequestBody{
            RstpEnabled: sdk.Bool(false),
            StpBridgePriority: []UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "non",
                        "iure",
                        "optio",
                        "minus",
                    },
                    StpPriority: 59498,
                    SwitchProfiles: []string{
                        "expedita",
                        "ea",
                        "autem",
                    },
                    Switches: []string{
                        "animi",
                    },
                },
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "perferendis",
                    },
                    StpPriority: 286754,
                    SwitchProfiles: []string{
                        "asperiores",
                        "consequuntur",
                        "ipsa",
                        "non",
                    },
                    Switches: []string{
                        "distinctio",
                        "nulla",
                    },
                },
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "aliquam",
                        "numquam",
                        "velit",
                    },
                    StpPriority: 843715,
                    SwitchProfiles: []string{
                        "ipsa",
                        "necessitatibus",
                        "neque",
                        "veritatis",
                    },
                    Switches: []string{
                        "aspernatur",
                    },
                },
                operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority{
                    Stacks: []string{
                        "doloribus",
                    },
                    StpPriority: 598631,
                    SwitchProfiles: []string{
                        "voluptatibus",
                        "accusantium",
                        "debitis",
                    },
                    Switches: []string{
                        "id",
                        "mollitia",
                    },
                },
            },
        },
        NetworkID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchStp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
