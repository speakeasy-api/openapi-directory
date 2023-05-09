# Intrusion

### Available Operations

* [GetNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [UpdateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## GetNetworkApplianceSecurityIntrusion

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
    res, err := s.Intrusion.GetNetworkApplianceSecurityIntrusion(ctx, operations.GetNetworkApplianceSecurityIntrusionRequest{
        NetworkID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityIntrusion

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
    res, err := s.Intrusion.GetOrganizationApplianceSecurityIntrusion(ctx, operations.GetOrganizationApplianceSecurityIntrusionRequest{
        OrganizationID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityIntrusion

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
    res, err := s.Intrusion.UpdateNetworkApplianceSecurityIntrusion(ctx, operations.UpdateNetworkApplianceSecurityIntrusionRequest{
        RequestBody: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBody{
            IdsRulesets: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumSecurity.ToPointer(),
            Mode: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumPrevention.ToPointer(),
            ProtectedNetworks: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks{
                ExcludedCidr: []string{
                    "nisi",
                    "minus",
                },
                IncludedCidr: []string{
                    "consequatur",
                },
                UseDefault: sdk.Bool(false),
            },
        },
        NetworkID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceSecurityIntrusion

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
    res, err := s.Intrusion.UpdateOrganizationApplianceSecurityIntrusion(ctx, operations.UpdateOrganizationApplianceSecurityIntrusionRequest{
        RequestBody: operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody{
            AllowedRules: []UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("est"),
                    RuleID: "cumque",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("harum"),
                    RuleID: "dicta",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("nesciunt"),
                    RuleID: "dolorum",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("placeat"),
                    RuleID: "sed",
                },
            },
        },
        OrganizationID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```
