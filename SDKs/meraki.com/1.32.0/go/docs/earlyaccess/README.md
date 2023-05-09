# EarlyAccess

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
    res, err := s.EarlyAccess.CreateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.CreateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: operations.CreateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "expedita",
                "magnam",
                "deserunt",
            },
            ShortName: "perspiciatis",
        },
        OrganizationID: "voluptates",
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
    res, err := s.EarlyAccess.DeleteOrganizationEarlyAccessFeaturesOptIn(ctx, operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "impedit",
        OrganizationID: "veniam",
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
    res, err := s.EarlyAccess.GetOrganizationEarlyAccessFeatures(ctx, operations.GetOrganizationEarlyAccessFeaturesRequest{
        OrganizationID: "rerum",
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
    res, err := s.EarlyAccess.GetOrganizationEarlyAccessFeaturesOptIn(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInRequest{
        OptInID: "amet",
        OrganizationID: "eum",
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
    res, err := s.EarlyAccess.GetOrganizationEarlyAccessFeaturesOptIns(ctx, operations.GetOrganizationEarlyAccessFeaturesOptInsRequest{
        OrganizationID: "praesentium",
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
    res, err := s.EarlyAccess.UpdateOrganizationEarlyAccessFeaturesOptIn(ctx, operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest{
        RequestBody: &operations.UpdateOrganizationEarlyAccessFeaturesOptInRequestBody{
            LimitScopeToNetworks: []string{
                "maxime",
                "impedit",
                "fuga",
            },
        },
        OptInID: "consectetur",
        OrganizationID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationEarlyAccessFeaturesOptIn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
