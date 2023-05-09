# Translations

### Available Operations

* [LanguageTranslationsList](#languagetranslationslist) - Translates input text, returning translated text.
* [LanguageTranslationsTranslate](#languagetranslationstranslate) - Translates input text, returning translated text.

## LanguageTranslationsList

Translates input text, returning translated text.

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
    res, err := s.Translations.LanguageTranslationsList(ctx, operations.LanguageTranslationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        BearerToken: sdk.String("cum"),
        Callback: sdk.String("esse"),
        Cid: []string{
            "excepturi",
        },
        Fields: sdk.String("aspernatur"),
        Format: operations.LanguageTranslationsListFormatEnumHTML.ToPointer(),
        Key: sdk.String("ad"),
        Model: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        Q: []string{
            "dolor",
            "natus",
            "laboriosam",
        },
        QuotaUser: sdk.String("hic"),
        Source: sdk.String("saepe"),
        Target: "fuga",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.LanguageTranslationsListSecurity{
        Option1: &operations.LanguageTranslationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslationsListResponse != nil {
        // handle response
    }
}
```

## LanguageTranslationsTranslate

Translates input text, returning translated text.

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
    res, err := s.Translations.LanguageTranslationsTranslate(ctx, operations.LanguageTranslationsTranslateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TranslateTextRequest: &shared.TranslateTextRequest{
            Format: sdk.String("iure"),
            Model: sdk.String("saepe"),
            Q: []string{
                "architecto",
                "ipsa",
                "reiciendis",
            },
            Source: sdk.String("est"),
            Target: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BearerToken: sdk.String("dolorem"),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("enim"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.LanguageTranslationsTranslateSecurity{
        Option1: &operations.LanguageTranslationsTranslateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslationsListResponse != nil {
        // handle response
    }
}
```
