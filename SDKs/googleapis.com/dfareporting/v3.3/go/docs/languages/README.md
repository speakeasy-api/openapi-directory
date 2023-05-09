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
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "at",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("molestiae"),
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
