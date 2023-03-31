# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/language/v1beta1/go
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

    req := operations.LanguageDocumentsAnalyzeEntitiesRequest{
        DollarXgafv: "2",
        AnalyzeEntitiesRequest: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                Content: "provident",
                GcsContentURI: "distinctio",
                Language: "quibusdam",
                Type: "PLAIN_TEXT",
            },
            EncodingType: "UTF32",
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Documents.LanguageDocumentsAnalyzeEntities(ctx, req, operations.LanguageDocumentsAnalyzeEntitiesSecurity{
        Option1: &operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeEntitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Documents

* `LanguageDocumentsAnalyzeEntities` - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* `LanguageDocumentsAnalyzeSentiment` - Analyzes the sentiment of the provided text.
* `LanguageDocumentsAnalyzeSyntax` - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* `LanguageDocumentsAnnotateText` - A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
