# IntrusionSettings

### Available Operations

* [GetNetworkSecurityIntrusionSettings](#getnetworksecurityintrusionsettings) - Returns all supported intrusion settings for an MX network
* [GetOrganizationSecurityIntrusionSettings](#getorganizationsecurityintrusionsettings) - Returns all supported intrusion settings for an organization
* [UpdateNetworkSecurityIntrusionSettings](#updatenetworksecurityintrusionsettings) - Set the supported intrusion settings for an MX network
* [UpdateOrganizationSecurityIntrusionSettings](#updateorganizationsecurityintrusionsettings) - Sets supported intrusion settings for an organization

## GetNetworkSecurityIntrusionSettings

Returns all supported intrusion settings for an MX network

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
    res, err := s.IntrusionSettings.GetNetworkSecurityIntrusionSettings(ctx, operations.GetNetworkSecurityIntrusionSettingsRequest{
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSecurityIntrusionSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSecurityIntrusionSettings

Returns all supported intrusion settings for an organization

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
    res, err := s.IntrusionSettings.GetOrganizationSecurityIntrusionSettings(ctx, operations.GetOrganizationSecurityIntrusionSettingsRequest{
        OrganizationID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSecurityIntrusionSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSecurityIntrusionSettings

Set the supported intrusion settings for an MX network

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
    res, err := s.IntrusionSettings.UpdateNetworkSecurityIntrusionSettings(ctx, operations.UpdateNetworkSecurityIntrusionSettingsRequest{
        RequestBody: &operations.UpdateNetworkSecurityIntrusionSettingsRequestBody{
            IdsRulesets: operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnumSecurity.ToPointer(),
            Mode: operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnumPrevention.ToPointer(),
            ProtectedNetworks: &operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks{
                ExcludedCidr: []string{
                    "esse",
                    "quasi",
                    "a",
                },
                IncludedCidr: []string{
                    "sint",
                    "pariatur",
                    "possimus",
                },
                UseDefault: sdk.Bool(false),
            },
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSecurityIntrusionSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationSecurityIntrusionSettings

Sets supported intrusion settings for an organization

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
    res, err := s.IntrusionSettings.UpdateOrganizationSecurityIntrusionSettings(ctx, operations.UpdateOrganizationSecurityIntrusionSettingsRequest{
        RequestBody: operations.UpdateOrganizationSecurityIntrusionSettingsRequestBody{
            WhitelistedRules: []UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules{
                operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules{
                    Message: sdk.String("asperiores"),
                    RuleID: "facere",
                },
                operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules{
                    Message: sdk.String("veritatis"),
                    RuleID: "consequuntur",
                },
                operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules{
                    Message: sdk.String("quasi"),
                    RuleID: "similique",
                },
                operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules{
                    Message: sdk.String("culpa"),
                    RuleID: "aliquid",
                },
            },
        },
        OrganizationID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationSecurityIntrusionSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
