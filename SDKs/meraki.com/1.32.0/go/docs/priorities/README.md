# Priorities

### Available Operations

* [GetOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [UpdateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.

## GetOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

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
    res, err := s.Priorities.GetOrganizationBrandingPoliciesPriorities(ctx, operations.GetOrganizationBrandingPoliciesPrioritiesRequest{
        OrganizationID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

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
    res, err := s.Priorities.UpdateOrganizationBrandingPoliciesPriorities(ctx, operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest{
        RequestBody: &operations.UpdateOrganizationBrandingPoliciesPrioritiesRequestBody{
            BrandingPolicyIds: []string{
                "repellendus",
            },
        },
        OrganizationID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != nil {
        // handle response
    }
}
```
