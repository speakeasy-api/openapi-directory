# Security

### Available Operations

* [GetNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [GetNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [GetNetworkApplianceSecurityMalware](#getnetworkappliancesecuritymalware) - Returns all supported malware settings for an MX network
* [GetOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [GetOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [UpdateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [UpdateNetworkApplianceSecurityMalware](#updatenetworkappliancesecuritymalware) - Set the supported malware settings for an MX network
* [UpdateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## GetNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Security.GetNetworkApplianceClientSecurityEvents(ctx, operations.GetNetworkApplianceClientSecurityEventsRequest{
        ClientID: "voluptatum",
        EndingBefore: sdk.String("voluptates"),
        NetworkID: "omnis",
        PerPage: sdk.Int64(100822),
        SortOrder: operations.GetNetworkApplianceClientSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("quod"),
        T0: sdk.String("cumque"),
        T1: sdk.String("minus"),
        Timespan: sdk.Float32(5079.03),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityEvents

List the security events for a network

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
    res, err := s.Security.GetNetworkApplianceSecurityEvents(ctx, operations.GetNetworkApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("at"),
        NetworkID: "cupiditate",
        PerPage: sdk.Int64(260879),
        SortOrder: operations.GetNetworkApplianceSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("voluptatibus"),
        T0: sdk.String("ipsum"),
        T1: sdk.String("in"),
        Timespan: sdk.Float32(4404.69),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.Security.GetNetworkApplianceSecurityIntrusion(ctx, operations.GetNetworkApplianceSecurityIntrusionRequest{
        NetworkID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSecurityMalware

Returns all supported malware settings for an MX network

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
    res, err := s.Security.GetNetworkApplianceSecurityMalware(ctx, operations.GetNetworkApplianceSecurityMalwareRequest{
        NetworkID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceSecurityEvents

List the security events for an organization

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
    res, err := s.Security.GetOrganizationApplianceSecurityEvents(ctx, operations.GetOrganizationApplianceSecurityEventsRequest{
        EndingBefore: sdk.String("adipisci"),
        OrganizationID: "libero",
        PerPage: sdk.Int64(870944),
        SortOrder: operations.GetOrganizationApplianceSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("ipsam"),
        T0: sdk.String("corporis"),
        T1: sdk.String("hic"),
        Timespan: sdk.Float32(333.94),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceSecurityEvents200ApplicationJSONObjects != nil {
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
    res, err := s.Security.GetOrganizationApplianceSecurityIntrusion(ctx, operations.GetOrganizationApplianceSecurityIntrusionRequest{
        OrganizationID: "et",
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
    res, err := s.Security.UpdateNetworkApplianceSecurityIntrusion(ctx, operations.UpdateNetworkApplianceSecurityIntrusionRequest{
        RequestBody: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBody{
            IdsRulesets: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnumBalanced.ToPointer(),
            Mode: operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnumDisabled.ToPointer(),
            ProtectedNetworks: &operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks{
                ExcludedCidr: []string{
                    "enim",
                    "deleniti",
                    "mollitia",
                    "tempore",
                },
                IncludedCidr: []string{
                    "neque",
                    "dolor",
                    "sequi",
                    "delectus",
                },
                UseDefault: sdk.Bool(false),
            },
        },
        NetworkID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSecurityMalware

Set the supported malware settings for an MX network

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
    res, err := s.Security.UpdateNetworkApplianceSecurityMalware(ctx, operations.UpdateNetworkApplianceSecurityMalwareRequest{
        RequestBody: operations.UpdateNetworkApplianceSecurityMalwareRequestBody{
            AllowedFiles: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedFiles{
                    Comment: "ratione",
                    Sha256: "a",
                },
            },
            AllowedUrls: []UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                operations.UpdateNetworkApplianceSecurityMalwareRequestBodyAllowedUrls{
                    Comment: "harum",
                    URL: "architecto",
                },
            },
            Mode: operations.UpdateNetworkApplianceSecurityMalwareRequestBodyModeEnumDisabled,
        },
        NetworkID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSecurityMalware200ApplicationJSONObject != nil {
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
    res, err := s.Security.UpdateOrganizationApplianceSecurityIntrusion(ctx, operations.UpdateOrganizationApplianceSecurityIntrusionRequest{
        RequestBody: operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody{
            AllowedRules: []UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("et"),
                    RuleID: "ipsum",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("officiis"),
                    RuleID: "cum",
                },
                operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules{
                    Message: sdk.String("at"),
                    RuleID: "quis",
                },
            },
        },
        OrganizationID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != nil {
        // handle response
    }
}
```
