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
    
    req := operations.AuthTokenRequest{
        Request: &shared.TokenRequest{
            ClientID: "deleniti",
            ClientSecret: "libero",
            GrantType: "nihil",
        },
    }
    
    res, err := s.Authentication.AuthToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->