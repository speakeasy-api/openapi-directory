<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AuthToken(ctx, shared.TokenRequest{
        ClientID: sdk.String("00000000-0000-0000-0000-00000000000"),
        ClientSecret: sdk.String("00000000-0000-0000-0000-00000000000"),
        GrantType: sdk.String("client_credentials"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->