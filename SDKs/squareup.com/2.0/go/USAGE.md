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

    req := operations.RegisterDomainRequest{
        Security: operations.RegisterDomainSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        Request: shared.RegisterDomainRequest{
            DomainName: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.ApplePay.RegisterDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->