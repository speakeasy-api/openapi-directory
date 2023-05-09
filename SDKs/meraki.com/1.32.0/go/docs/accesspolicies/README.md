# AccessPolicies

### Available Operations

* [CreateNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [DeleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [GetNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [GetNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [UpdateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network

## CreateNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

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
    res, err := s.AccessPolicies.CreateNetworkSwitchAccessPolicy(ctx, operations.CreateNetworkSwitchAccessPolicyRequest{
        RequestBody: operations.CreateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumHybridAuthentication.ToPointer(),
            Dot1x: &operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumBoth.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(368241),
            HostMode: operations.CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumSingleHost,
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: "Cedric Connelly",
            Radius: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(978619),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(473608),
                },
                FailedAuthVlanID: sdk.Int64(799159),
                ReAuthenticationInterval: sdk.Int64(800911),
            },
            RadiusAccountingEnabled: false,
            RadiusAccountingServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "totam",
                    Port: 780529,
                    Secret: "dolorum",
                },
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "dicta",
                    Port: 720633,
                    Secret: "officia",
                },
            },
            RadiusCoaSupportEnabled: false,
            RadiusGroupAttribute: sdk.String("occaecati"),
            RadiusServers: []CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "deleniti",
                    Port: 944669,
                    Secret: "optio",
                },
            },
            RadiusTestingEnabled: false,
            URLRedirectWalledGardenEnabled: false,
            URLRedirectWalledGardenRanges: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        NetworkID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchAccessPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

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
    res, err := s.AccessPolicies.DeleteNetworkSwitchAccessPolicy(ctx, operations.DeleteNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "qui",
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

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
    res, err := s.AccessPolicies.GetNetworkSwitchAccessPolicies(ctx, operations.GetNetworkSwitchAccessPoliciesRequest{
        NetworkID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

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
    res, err := s.AccessPolicies.GetNetworkSwitchAccessPolicy(ctx, operations.GetNetworkSwitchAccessPolicyRequest{
        AccessPolicyNumber: "esse",
        NetworkID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

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
    res, err := s.AccessPolicies.UpdateNetworkSwitchAccessPolicy(ctx, operations.UpdateNetworkSwitchAccessPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchAccessPolicyRequestBody{
            AccessPolicyType: operations.UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumHybridAuthentication.ToPointer(),
            Dot1x: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1x{
                ControlDirection: operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnumBoth.ToPointer(),
            },
            GuestPortBouncing: sdk.Bool(false),
            GuestVlanID: sdk.Int64(18789),
            HostMode: operations.UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiDomain.ToPointer(),
            IncreaseAccessSpeed: sdk.Bool(false),
            Name: sdk.String("Louis Moore"),
            Radius: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadius{
                CriticalAuth: &operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth{
                    DataVlanID: sdk.Int64(386489),
                    SuspendPortBounce: sdk.Bool(false),
                    VoiceVlanID: sdk.Int64(943749),
                },
                FailedAuthVlanID: sdk.Int64(902599),
                ReAuthenticationInterval: sdk.Int64(681820),
            },
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "corporis",
                    Port: 613064,
                    Secret: "iure",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers{
                    Host: "saepe",
                    Port: 697631,
                    Secret: "architecto",
                },
            },
            RadiusCoaSupportEnabled: sdk.Bool(false),
            RadiusGroupAttribute: sdk.String("ipsa"),
            RadiusServers: []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "est",
                    Port: 653140,
                    Secret: "laborum",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "dolores",
                    Port: 210382,
                    Secret: "corporis",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "explicabo",
                    Port: 750686,
                    Secret: "enim",
                },
                operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers{
                    Host: "omnis",
                    Port: 363711,
                    Secret: "minima",
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            URLRedirectWalledGardenEnabled: sdk.Bool(false),
            URLRedirectWalledGardenRanges: []string{
                "accusantium",
                "iure",
                "culpa",
            },
            VoiceVlanClients: sdk.Bool(false),
        },
        AccessPolicyNumber: "doloribus",
        NetworkID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAccessPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
