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
    
    req := operations.ChangePasswordRequest{
        PathParams: operations.ChangePasswordPathParams{
            ShopperID: "deleniti",
        },
        Request: "est",
    }
    
    res, err := s.V1.ChangePassword(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShopperID != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->