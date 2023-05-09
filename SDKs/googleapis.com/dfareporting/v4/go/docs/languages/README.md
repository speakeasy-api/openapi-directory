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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "distinctio",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("optio"),
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
