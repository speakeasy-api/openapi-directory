# V1

### Available Operations

* [PlayintegrityDecodeIntegrityToken](#playintegritydecodeintegritytoken) - Decodes the integrity token and returns the token payload.

## PlayintegrityDecodeIntegrityToken

Decodes the integrity token and returns the token payload.

### Example Usage

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
    res, err := s.V1.PlayintegrityDecodeIntegrityToken(ctx, operations.PlayintegrityDecodeIntegrityTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DecodeIntegrityTokenRequest: &shared.DecodeIntegrityTokenRequest{
            IntegrityToken: sdk.String("magnam"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PackageName: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.PlayintegrityDecodeIntegrityTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DecodeIntegrityTokenResponse != nil {
        // handle response
    }
}
```
