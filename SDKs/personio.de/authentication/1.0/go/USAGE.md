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
    
    req := operations.PostAuthRequest{
        QueryParams: operations.PostAuthQueryParams{
            ClientID: "quis",
            ClientSecret: "aperiam",
        },
    }
    
    res, err := s.PostAuth(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->