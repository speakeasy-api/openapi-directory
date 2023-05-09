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
    res, err := s.CreateAccessToken(ctx, operations.CreateAccessTokenRequest{
        RequestBody: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: sdk.String("corrupti"),
            FactorType: shared.AccessTokenEnumFactorTypesEnumPush,
            Identity: "provident",
            TTL: sdk.Int64(715190),
        },
        ServiceSid: "quibusdam",
    }, operations.CreateAccessTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->