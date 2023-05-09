# Policies

### Available Operations

* [GetPoliciesPolicyID](#getpoliciespolicyid) - /policies/{policy_id}
* [PostPolicies](#postpolicies) - /policies

## GetPoliciesPolicyID

### Get a policy
Get the latest details for a specific policy.

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Policies.GetPoliciesPolicyID(ctx, operations.GetPoliciesPolicyIDRequest{
        PolicyID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPoliciesPolicyID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostPolicies

### Bind a policy
Take a quote and bind it.

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Policies.PostPolicies(ctx, operations.PostPoliciesRequestBody{
        QuoteID: sdk.String("bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```
