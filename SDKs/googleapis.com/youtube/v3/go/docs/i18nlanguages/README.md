# I18nLanguages

### Available Operations

* [YoutubeI18nLanguagesList](#youtubei18nlanguageslist) - Retrieves a list of resources, possibly filtered.

## YoutubeI18nLanguagesList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.I18nLanguages.YoutubeI18nLanguagesList(ctx, operations.YoutubeI18nLanguagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("earum"),
        Hl: sdk.String("modi"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("vero"),
        Part: []string{
            "ipsam",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.YoutubeI18nLanguagesListSecurity{
        Option1: &operations.YoutubeI18nLanguagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.I18nLanguageListResponse != nil {
        // handle response
    }
}
```
