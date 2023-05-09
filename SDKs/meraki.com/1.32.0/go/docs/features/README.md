# Features

### Available Operations

* [CreateOrganizationEarlyAccessFeaturesOptIn](#createorganizationearlyaccessfeaturesoptin) - Create a new early access feature opt-in for an organization
* [DeleteOrganizationEarlyAccessFeaturesOptIn](#deleteorganizationearlyaccessfeaturesoptin) - Delete an early access feature opt-in
* [GetOrganizationEarlyAccessFeatures](#getorganizationearlyaccessfeatures) - List the available early access features for organization
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
    res, err := s.Features.CreateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.CreateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: operations.CreateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "veniam",
                "fugit",
            },
            ShortName: "ducimus",
        },
        OrganizationID: "et",
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
    res, err := s.Features.DeleteOrganizationEarlyAccessFeaturesOptIn(ctx, operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "cum",
        OrganizationID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationEarlyAccessFeatures

List the available early access features for organization

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
    res, err := s.Features.GetOrganizationEarlyAccessFeatures(ctx, operations.GetOrganizationEarlyAccessFeaturesRequest{
        OrganizationID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationEarlyAccessFeatures200ApplicationJSONObjects != nil {
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
    res, err := s.Features.GetOrganizationEarlyAccessFeaturesOptIn(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "vitae",
        OrganizationID: "architecto",
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
    res, err := s.Features.GetOrganizationEarlyAccessFeaturesOptIns(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInsRequest{
        OrganizationID: "repellendus",
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
    res, err := s.Features.UpdateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: &operations.UpdateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "suscipit",
                "consequatur",
                "aliquid",
                "at",
            },
        },
        OptInID: "quibusdam",
        OrganizationID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
