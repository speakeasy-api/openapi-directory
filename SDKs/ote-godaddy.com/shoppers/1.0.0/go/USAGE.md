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

    req := operations.ChangePasswordRequest{
        PathParams: operations.ChangePasswordPathParams{
            ShopperID: "corrupti",
        },
        Request: shared.Secret{
            Secret: "P@55w0rd+",
        },
    }

    ctx := context.Background()
    res, err := s.V1.ChangePassword(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShopperID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->