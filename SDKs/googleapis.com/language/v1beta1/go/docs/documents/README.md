# Documents

### Available Operations

* [LanguageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [LanguageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [LanguageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [LanguageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

## LanguageDocumentsAnalyzeEntities

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

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
    res, err := s.Documents.LanguageDocumentsAnalyzeEntities(ctx, operations.LanguageDocumentsAnalyzeEntitiesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzeEntitiesRequest: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                Content: sdk.String("delectus"),
                GcsContentURI: sdk.String("tempora"),
                Language: sdk.String("suscipit"),
                Type: shared.DocumentTypeEnumPlainText.ToPointer(),
            },
            EncodingType: shared.AnalyzeEntitiesRequestEncodingTypeEnumUtf32.ToPointer(),
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.LanguageDocumentsAnalyzeEntitiesSecurity{
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

## LanguageDocumentsAnalyzeSentiment

Analyzes the sentiment of the provided text.

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
    res, err := s.Documents.LanguageDocumentsAnalyzeSentiment(ctx, operations.LanguageDocumentsAnalyzeSentimentRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzeSentimentRequest: &shared.AnalyzeSentimentRequest{
            Document: &shared.Document{
                Content: sdk.String("deserunt"),
                GcsContentURI: sdk.String("perferendis"),
                Language: sdk.String("ipsam"),
                Type: shared.DocumentTypeEnumHTML.ToPointer(),
            },
            EncodingType: shared.AnalyzeSentimentRequestEncodingTypeEnumUtf32.ToPointer(),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    }, operations.LanguageDocumentsAnalyzeSentimentSecurity{
        Option1: &operations.LanguageDocumentsAnalyzeSentimentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeSentimentResponse != nil {
        // handle response
    }
}
```

## LanguageDocumentsAnalyzeSyntax

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

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
    res, err := s.Documents.LanguageDocumentsAnalyzeSyntax(ctx, operations.LanguageDocumentsAnalyzeSyntaxRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AnalyzeSyntaxRequest: &shared.AnalyzeSyntaxRequest{
            Document: &shared.Document{
                Content: sdk.String("porro"),
                GcsContentURI: sdk.String("dolorum"),
                Language: sdk.String("dicta"),
                Type: shared.DocumentTypeEnumHTML.ToPointer(),
            },
            EncodingType: shared.AnalyzeSyntaxRequestEncodingTypeEnumUtf16.ToPointer(),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("hic"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.LanguageDocumentsAnalyzeSyntaxSecurity{
        Option1: &operations.LanguageDocumentsAnalyzeSyntaxSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeSyntaxResponse != nil {
        // handle response
    }
}
```

## LanguageDocumentsAnnotateText

A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

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
    res, err := s.Documents.LanguageDocumentsAnnotateText(ctx, operations.LanguageDocumentsAnnotateTextRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnnotateTextRequest: &shared.AnnotateTextRequest{
            Document: &shared.Document{
                Content: sdk.String("qui"),
                GcsContentURI: sdk.String("impedit"),
                Language: sdk.String("cum"),
                Type: shared.DocumentTypeEnumPlainText.ToPointer(),
            },
            EncodingType: shared.AnnotateTextRequestEncodingTypeEnumNone.ToPointer(),
            Features: &shared.Features{
                ExtractDocumentSentiment: sdk.Bool(false),
                ExtractEntities: sdk.Bool(false),
                ExtractSyntax: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.LanguageDocumentsAnnotateTextSecurity{
        Option1: &operations.LanguageDocumentsAnnotateTextSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnotateTextResponse != nil {
        // handle response
    }
}
```
