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

    req := operations.AuthTokenRequest{
        Request: &shared.TokenRequest{
            ClientID: "00000000-0000-0000-0000-00000000000",
            ClientSecret: "00000000-0000-0000-0000-00000000000",
            GrantType: "client_credentials",
        },
    }

    ctx := context.Background()
    res, err := s.Authentication.AuthToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->