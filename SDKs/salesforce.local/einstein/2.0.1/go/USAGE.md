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

    req := operations.GenerateTokenV2Request{
        Request: &operations.GenerateTokenV2RequestBody{
            Assertion: "SOME_ASSERTION_STRING",
            GrantType: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            RefreshToken: "SomeRefreshToken",
            Scope: "offline",
            ValidFor: 120,
        },
    }

    ctx := context.Background()
    res, err := s.Authorization.GenerateTokenV2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->