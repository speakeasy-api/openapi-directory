# RootIdpAuthDomain

## Overview

IdP authentication domains.

### Available Operations

* [CreateIDProviderAuthDomain](#createidproviderauthdomain) - Add a new IdP authentication domain
* [DeleteIDProviderAuthDomain](#deleteidproviderauthdomain) - Delete an IdP authentication domain for the given ID
* [GetIDProviderAuthDomain](#getidproviderauthdomain) - Get an IdP authentication domain for the given id
* [QueryIDProviderAuthDomain](#queryidproviderauthdomain) - Get a list of IdP authentication domains
* [UpdateIDProviderAuthDomain](#updateidproviderauthdomain) - Update an existing IdP authentication domain

## CreateIDProviderAuthDomain

Add a new IdP authentication domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootIdpAuthDomain.CreateIDProviderAuthDomain(ctx, shared.IDProviderAuthDomainInfo{
        MetadataXMLBase64: "blanditiis",
        Name: "Marlene Littel",
        SkewnessInSec: sdk.Int64(722151),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IDProviderAuthDomainSummary != nil {
        // handle response
    }
}
```

## DeleteIDProviderAuthDomain

Delete an IdP authentication domain for the given ID.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootIdpAuthDomain.DeleteIDProviderAuthDomain(ctx, operations.DeleteIDProviderAuthDomainRequest{
        ID: "01afdd78-8624-4189-ab44-873f5033f19d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIDProviderAuthDomain

Get an IdP authentication domain for the given id.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootIdpAuthDomain.GetIDProviderAuthDomain(ctx, operations.GetIDProviderAuthDomainRequest{
        ID: "bf125ce4-152e-4ab9-8d7e-5224a6a0e123",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IDProviderAuthDomainSummary != nil {
        // handle response
    }
}
```

## QueryIDProviderAuthDomain

Get a list of IdP authentication domains.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootIdpAuthDomain.QueryIDProviderAuthDomain(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.IDProviderAuthDomainSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateIDProviderAuthDomain

Update an existing IdP authentication domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootIdpAuthDomain.UpdateIDProviderAuthDomain(ctx, operations.UpdateIDProviderAuthDomainRequest{
        IDProviderAuthDomainInfoUpdate: shared.IDProviderAuthDomainInfoUpdate{
            MetadataXMLBase64: sdk.String("cum"),
            Name: sdk.String("Naomi Friesen"),
            SkewnessInSec: sdk.Int64(752919),
        },
        ID: "59e1f67f-3c4c-4ce4-b6d7-696ff3c57475",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IDProviderAuthDomainSummary != nil {
        // handle response
    }
}
```
