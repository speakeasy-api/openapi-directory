# DomainsAPI

### Available Operations

* [GetDomain](#getdomain) - Get information about a specific domain.
* [GetDomains](#getdomains) - Get a list of the available domains.

## GetDomain

Get information about a specific domain.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomain(ctx, operations.GetDomainRequest{
        DomainID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```

## GetDomains

Get a list of the available domains.

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
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomains(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```
