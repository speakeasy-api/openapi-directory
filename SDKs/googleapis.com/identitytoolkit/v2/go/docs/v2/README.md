# V2

### Available Operations

* [IdentitytoolkitGetRecaptchaConfig](#identitytoolkitgetrecaptchaconfig) - Gets parameters needed for reCAPTCHA analysis.

## IdentitytoolkitGetRecaptchaConfig

Gets parameters needed for reCAPTCHA analysis.

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
    res, err := s.V2.IdentitytoolkitGetRecaptchaConfig(ctx, operations.IdentitytoolkitGetRecaptchaConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        ClientType: operations.IdentitytoolkitGetRecaptchaConfigClientTypeEnumClientTypeIos.ToPointer(),
        Fields: sdk.String("porro"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        TenantID: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
        Version: operations.IdentitytoolkitGetRecaptchaConfigVersionEnumRecaptchaEnterprise.ToPointer(),
    }, operations.IdentitytoolkitGetRecaptchaConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIdentitytoolkitV2RecaptchaConfig != nil {
        // handle response
    }
}
```
