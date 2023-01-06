<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetDomainRequest{
        PathParams: operations.GetDomainPathParams{
            DomainID: "corporis",
        },
        Headers: operations.GetDomainHeaders{
            TrainingKey: "dolor",
        },
    }
    
    res, err := s.DomainsAPI.GetDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->