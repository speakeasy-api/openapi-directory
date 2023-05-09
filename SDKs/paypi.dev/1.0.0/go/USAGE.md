<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PostCheckCode(ctx, operations.PostCheckCodeRequestBody{
        Code: sdk.String("corrupti"),
        Email: sdk.String("Micheal_Sporer@yahoo.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCheckCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->