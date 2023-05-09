# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/translate/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Detections.LanguageDetectionsDetect(ctx, operations.LanguageDetectionsDetectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Q: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BearerToken: sdk.String("illum"),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.LanguageDetectionsDetectSecurity{
        Option1: &operations.LanguageDetectionsDetectSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Detections](docs/detections/README.md)

* [LanguageDetectionsDetect](docs/detections/README.md#languagedetectionsdetect) - Detects the language of text within a request.
* [LanguageDetectionsList](docs/detections/README.md#languagedetectionslist) - Detects the language of text within a request.

### [Languages](docs/languages/README.md)

* [LanguageLanguagesList](docs/languages/README.md#languagelanguageslist) - Returns a list of supported languages for translation.

### [Translations](docs/translations/README.md)

* [LanguageTranslationsList](docs/translations/README.md#languagetranslationslist) - Translates input text, returning translated text.
* [LanguageTranslationsTranslate](docs/translations/README.md#languagetranslationstranslate) - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
