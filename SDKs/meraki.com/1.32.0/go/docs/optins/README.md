# OptIns

### Available Operations

* [CreateOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [DeleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [GetOrganizationEarlyAccessFeaturesOptIn](#getorganizationearlyaccessfeaturesoptin) - Show an early access feature opt-in for an organization
* [GetOrganizationEarlyAccessFeaturesOptIns](#getorganizationearlyaccessfeaturesoptins) - List the early access feature opt-ins for an organization
* [UpdateOrganizationEarlyAccessFeaturesOptIn](#updateorganizationearlyaccessfeaturesoptin) - Update an early access feature opt-in for an organization

## CreateOrganizationEarlyAccessFeaturesOptIn

Create a new early access feature opt-in for an organization

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
    res, err := s.OptIns.CreateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.CreateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: operations.CreateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "excepturi",
                "distinctio",
            },
            ShortName: "quam",
        },
        OrganizationID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationEarlyAccessFeaturesOptIn

Delete an early access feature opt-in

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
    res, err := s.OptIns.DeleteOrganizationEarlyAccessFeaturesOptIn(ctx, operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "eaque",
        OrganizationID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeaturesOptIn

Show an early access feature opt-in for an organization

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
    res, err := s.OptIns.GetOrganizationEarlyAccessFeaturesOptIn(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "quia",
        OrganizationID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeaturesOptIns

List the early access feature opt-ins for an organization

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
    res, err := s.OptIns.GetOrganizationEarlyAccessFeaturesOptIns(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInsRequest{
        OrganizationID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeaturesOptIns200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationEarlyAccessFeaturesOptIn

Update an early access feature opt-in for an organization

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
    res, err := s.OptIns.UpdateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: &operations.UpdateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "repellat",
            },
        },
        OptInID: "dolor",
        OrganizationID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
