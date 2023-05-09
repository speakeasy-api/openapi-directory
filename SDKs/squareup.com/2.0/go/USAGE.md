<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplePay.RegisterDomain(ctx, shared.RegisterDomainRequest{
        DomainName: "corrupti",
    }, operations.RegisterDomainSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->