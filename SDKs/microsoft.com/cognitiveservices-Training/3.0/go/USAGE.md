<!-- Start SDK Example Usage -->
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
        TrainingKey: "corrupti",
        DomainID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->