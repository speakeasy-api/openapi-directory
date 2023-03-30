<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetDomainRequest{
        PathParams: operations.GetDomainPathParams{
            DomainID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        Headers: operations.GetDomainHeaders{
            TrainingKey: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->