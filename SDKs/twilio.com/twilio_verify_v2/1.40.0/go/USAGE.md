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

    req := operations.CreateAccessTokenRequest{
        Security: operations.CreateAccessTokenSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateAccessTokenPathParams{
            ServiceSid: "unde",
        },
        Request: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: "deserunt",
            FactorType: "push",
            Identity: "nulla",
            TTL: 602763,
        },
    }

    ctx := context.Background()
    res, err := s.CreateAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->