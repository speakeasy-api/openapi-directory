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

    req := operations.GetOauthV1AccessTokensTokenGetRequest{
        PathParams: operations.GetOauthV1AccessTokensTokenGetPathParams{
            Token: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AccessTokens.GetOauthV1AccessTokensTokenGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenInfoResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->