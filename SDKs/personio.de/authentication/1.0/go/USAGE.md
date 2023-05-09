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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PostAuth(ctx, operations.PostAuthRequest{
        ClientID: "corrupti",
        ClientSecret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->