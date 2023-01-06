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
    
    req := operations.GenerateTokenV2Request{
        Request: &operations.GenerateTokenV2RequestBody{
            Assertion: "voluptatum",
            GrantType: "urn:ietf:params:oauth:grant-type:jwt-bearer",
            RefreshToken: "nulla",
            Scope: "ut",
            ValidFor: 4885611820145246548,
        },
    }
    
    res, err := s.Authorization.GenerateTokenV2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->