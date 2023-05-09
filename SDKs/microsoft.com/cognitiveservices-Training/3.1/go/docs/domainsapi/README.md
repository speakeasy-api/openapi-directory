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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomain(ctx, operations.GetDomainRequest{
        TrainingKey: "perferendis",
        DomainID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomains(ctx, operations.GetDomainsRequest{
        TrainingKey: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```
