<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.ChangePassword(ctx, operations.ChangePasswordRequest{
        Secret: shared.Secret{
            Secret: sdk.String("P@55w0rd+"),
        },
        ShopperID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShopperID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->