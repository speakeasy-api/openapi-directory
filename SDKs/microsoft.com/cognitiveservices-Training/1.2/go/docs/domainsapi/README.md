# DomainsAPI

### Available Operations

* [GetDomain](#getdomain) - Get information about a specific domain
* [GetDomains](#getdomains) - Get a list of the available domains

## GetDomain

Get information about a specific domain

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
        TrainingKey: "distinctio",
        DomainID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
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

Get a list of the available domains

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
        TrainingKey: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domains != nil {
        // handle response
    }
}
```
