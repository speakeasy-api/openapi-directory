# Policies

### Available Operations

* [CreateOrganizationAdaptivePolicyPolicy](#createorganizationadaptivepolicypolicy) - Add an Adaptive Policy
* [DeleteOrganizationAdaptivePolicyPolicy](#deleteorganizationadaptivepolicypolicy) - Delete an Adaptive Policy
* [GetNetworkPoliciesByClient](#getnetworkpoliciesbyclient) - Get policies for all clients with policies
* [GetOrganizationAdaptivePolicyPolicies](#getorganizationadaptivepolicypolicies) - List adaptive policies in an organization
* [GetOrganizationAdaptivePolicyPolicy](#getorganizationadaptivepolicypolicy) - Return an adaptive policy
* [UpdateOrganizationAdaptivePolicyPolicy](#updateorganizationadaptivepolicypolicy) - Update an Adaptive Policy

## CreateOrganizationAdaptivePolicyPolicy

Add an Adaptive Policy

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
    res, err := s.Policies.CreateOrganizationAdaptivePolicyPolicy(ctx, operations.CreateOrganizationAdaptivePolicyPolicyRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyPolicyRequestBody{
            Acls: []CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("2459048f-a667-467e-a9d4-e543c4da5ae4"),
                    Name: sdk.String("Alberto Quitzon"),
                },
            },
            DestinationGroup: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup{
                ID: sdk.String("470843fe-081a-42fb-bfe9-31a78c4264ca"),
                Name: sdk.String("Bill Bogan"),
                Sgt: sdk.Int64(795148),
            },
            LastEntryRule: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnumAllow.ToPointer(),
            SourceGroup: operations.CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup{
                ID: sdk.String("d08c6b93-203c-4d4d-b627-167743837d1a"),
                Name: sdk.String("Courtney Wehner"),
                Sgt: sdk.Int64(923446),
            },
        },
        OrganizationID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyPolicy201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyPolicy

Delete an Adaptive Policy

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
    res, err := s.Policies.DeleteOrganizationAdaptivePolicyPolicy(ctx, operations.DeleteOrganizationAdaptivePolicyPolicyRequest{
        ID: "c38bafd4-81ab-4fcb-a1cb-2f76901b943e",
        OrganizationID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkPoliciesByClient

Get policies for all clients with policies

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
    res, err := s.Policies.GetNetworkPoliciesByClient(ctx, operations.GetNetworkPoliciesByClientRequest{
        EndingBefore: sdk.String("qui"),
        NetworkID: "est",
        PerPage: sdk.Int64(376669),
        StartingAfter: sdk.String("explicabo"),
        T0: sdk.String("sit"),
        Timespan: sdk.Float32(7079.37),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkPoliciesByClient200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyPolicies

List adaptive policies in an organization

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
    res, err := s.Policies.GetOrganizationAdaptivePolicyPolicies(ctx, operations.GetOrganizationAdaptivePolicyPoliciesRequest{
        OrganizationID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyPolicies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyPolicy

Return an adaptive policy

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
    res, err := s.Policies.GetOrganizationAdaptivePolicyPolicy(ctx, operations.GetOrganizationAdaptivePolicyPolicyRequest{
        ID: "c3190b14-4241-4b47-9067-3b4158358492",
        OrganizationID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyPolicy

Update an Adaptive Policy

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
    res, err := s.Policies.UpdateOrganizationAdaptivePolicyPolicy(ctx, operations.UpdateOrganizationAdaptivePolicyPolicyRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBody{
            Acls: []UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("b53c23e5-dd0e-4047-9dfe-238ce69a15d2"),
                    Name: sdk.String("Shelley Frami"),
                },
                operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls{
                    ID: sdk.String("02ff631f-c8db-448a-9116-a3f37f7008aa"),
                    Name: sdk.String("Floyd Cummings DDS"),
                },
            },
            DestinationGroup: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup{
                ID: sdk.String("427a3fcd-362a-4d94-af44-81183765262c"),
                Name: sdk.String("Ms. Elena Lubowitz"),
                Sgt: sdk.Int64(622061),
            },
            LastEntryRule: operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnumDefault.ToPointer(),
            SourceGroup: &operations.UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup{
                ID: sdk.String("f0993347-3ccb-4791-9d26-69ffa9c8fe1e"),
                Name: sdk.String("Allison Quitzon"),
                Sgt: sdk.Int64(677807),
            },
        },
        ID: "845249e0-8d2c-4cb4-a5f0-74abfddeab7f",
        OrganizationID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
