# Languages

### Available Operations

* [LanguageLanguagesList](#languagelanguageslist) - Returns a list of supported languages for translation.

## LanguageLanguagesList

Returns a list of supported languages for translation.

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
    res, err := s.Languages.LanguageLanguagesList(ctx, operations.LanguageLanguagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        BearerToken: sdk.String("officia"),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        Model: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        Target: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.LanguageLanguagesListSecurity{
        Option1: &operations.LanguageLanguagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguagesListResponse != nil {
        // handle response
    }
}
```
