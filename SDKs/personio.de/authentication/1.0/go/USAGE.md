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

    req := operations.PostAuthRequest{
        ClientID: "corrupti",
        ClientSecret: "provident",
    }

    ctx := context.Background()
    res, err := s.PostAuth(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->