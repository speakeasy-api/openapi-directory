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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.LanguageDetectionsDetectRequest{
        DollarXgafv: "2",
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Q: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: "nulla",
        Alt: "media",
        BearerToken: "illum",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        Pp: false,
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Detections.LanguageDetectionsDetect(ctx, req, operations.LanguageDetectionsDetectSecurity{
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


### Detections

* `LanguageDetectionsDetect` - Detects the language of text within a request.
* `LanguageDetectionsList` - Detects the language of text within a request.

### Languages

* `LanguageLanguagesList` - Returns a list of supported languages for translation.

### Translations

* `LanguageTranslationsList` - Translates input text, returning translated text.
* `LanguageTranslationsTranslate` - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
