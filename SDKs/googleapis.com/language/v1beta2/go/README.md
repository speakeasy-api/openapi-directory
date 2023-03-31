# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/language/v1beta2/go
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
                BoilerplateHandling: "SKIP_BOILERPLATE",
                Content: "distinctio",
                GcsContentURI: "quibusdam",
                Language: "unde",
                ReferenceWebURI: "nulla",
                Type: "PLAIN_TEXT",
            },
            EncodingType: "UTF32",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
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
* `LanguageDocumentsAnalyzeEntitySentiment` - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* `LanguageDocumentsAnalyzeSentiment` - Analyzes the sentiment of the provided text.
* `LanguageDocumentsAnalyzeSyntax` - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* `LanguageDocumentsAnnotateText` - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* `LanguageDocumentsClassifyText` - Classifies a document into categories.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
