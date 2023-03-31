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
        RequestBody: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: "corrupti",
            FactorType: "push",
            Identity: "provident",
            TTL: 715190,
        },
        ServiceSid: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.CreateAccessToken(ctx, req, operations.CreateAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->