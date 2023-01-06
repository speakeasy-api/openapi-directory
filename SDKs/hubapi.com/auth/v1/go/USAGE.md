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
    
    req := operations.GetOauthV1AccessTokensTokenGetAccessTokenRequest{
        PathParams: operations.GetOauthV1AccessTokensTokenGetAccessTokenPathParams{
            Token: "et",
        },
    }
    
    res, err := s.AccessTokens.GetOauthV1AccessTokensTokenGetAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenInfoResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->