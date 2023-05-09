# AccessControlLists

### Available Operations

* [GetNetworkSwitchAccessControlLists](#getnetworkswitchaccesscontrollists) - Return the access control lists for a MS network
* [UpdateNetworkSwitchAccessControlLists](#updatenetworkswitchaccesscontrollists) - Update the access control lists for a MS network

## GetNetworkSwitchAccessControlLists

Return the access control lists for a MS network

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
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, operations.GetNetworkSwitchAccessControlListsRequest{
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessControlLists

Update the access control lists for a MS network

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
    res, err := s.AccessControlLists.UpdateNetworkSwitchAccessControlLists(ctx, operations.UpdateNetworkSwitchAccessControlListsRequest{
        RequestBody: operations.UpdateNetworkSwitchAccessControlListsRequestBody{
            Rules: []UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("quibusdam"),
                    DstCidr: "unde",
                    DstPort: sdk.String("nulla"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv4.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "error",
                    SrcPort: sdk.String("deserunt"),
                    Vlan: sdk.String("suscipit"),
                },
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("iure"),
                    DstCidr: "magnam",
                    DstPort: sdk.String("debitis"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumAny.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "suscipit",
                    SrcPort: sdk.String("molestiae"),
                    Vlan: sdk.String("minus"),
                },
                operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules{
                    Comment: sdk.String("placeat"),
                    DstCidr: "voluptatum",
                    DstPort: sdk.String("iusto"),
                    IPVersion: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesIPVersionEnumIpv4.ToPointer(),
                    Policy: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "temporibus",
                    SrcPort: sdk.String("ab"),
                    Vlan: sdk.String("quis"),
                },
            },
        },
        NetworkID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```
