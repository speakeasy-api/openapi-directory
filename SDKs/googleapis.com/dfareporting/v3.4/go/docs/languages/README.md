# Languages

### Available Operations

* [DfareportingLanguagesList](#dfareportinglanguageslist) - Retrieves a list of languages.

## DfareportingLanguagesList

Retrieves a list of languages.

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
    res, err := s.Languages.DfareportingLanguagesList(ctx, operations.DfareportingLanguagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "adipisci",
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DfareportingLanguagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguagesListResponse != nil {
        // handle response
    }
}
```
