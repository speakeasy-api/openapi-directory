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
    res, err := s.Authorization.GenerateTokenV2(ctx, operations.GenerateTokenV2RequestBody{
        Assertion: sdk.String("SOME_ASSERTION_STRING"),
        GrantType: operations.GenerateTokenV2RequestBodyGrantTypeEnumUrnIetfParamsOauthGrantTypeJwtBearer.ToPointer(),
        RefreshToken: sdk.String("SomeRefreshToken"),
        Scope: sdk.String("offline"),
        ValidFor: sdk.Int(120),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->