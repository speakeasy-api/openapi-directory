# Documents

### Available Operations

* [LanguageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [LanguageDocumentsAnalyzeEntitySentiment](#languagedocumentsanalyzeentitysentiment) - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* [LanguageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [LanguageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [LanguageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* [LanguageDocumentsClassifyText](#languagedocumentsclassifytext) - Classifies a document into categories.

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
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumSkipBoilerplate.ToPointer(),
                Content: sdk.String("molestiae"),
                GcsContentURI: sdk.String("minus"),
                Language: sdk.String("placeat"),
                ReferenceWebURI: sdk.String("voluptatum"),
                Type: shared.DocumentTypeEnumPlainText.ToPointer(),
            },
            EncodingType: shared.AnalyzeEntitiesRequestEncodingTypeEnumUtf16.ToPointer(),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
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

## LanguageDocumentsAnalyzeEntitySentiment

Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.

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
    res, err := s.Documents.LanguageDocumentsAnalyzeEntitySentiment(ctx, operations.LanguageDocumentsAnalyzeEntitySentimentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AnalyzeEntitySentimentRequest: &shared.AnalyzeEntitySentimentRequest{
            Document: &shared.Document{
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumKeepBoilerplate.ToPointer(),
                Content: sdk.String("quo"),
                GcsContentURI: sdk.String("odit"),
                Language: sdk.String("at"),
                ReferenceWebURI: sdk.String("at"),
                Type: shared.DocumentTypeEnumHTML.ToPointer(),
            },
            EncodingType: shared.AnalyzeEntitySentimentRequestEncodingTypeEnumUTF8.ToPointer(),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("totam"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    }, operations.LanguageDocumentsAnalyzeEntitySentimentSecurity{
        Option1: &operations.LanguageDocumentsAnalyzeEntitySentimentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeEntitySentimentResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AnalyzeSentimentRequest: &shared.AnalyzeSentimentRequest{
            Document: &shared.Document{
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumBoilerplateHandlingUnspecified.ToPointer(),
                Content: sdk.String("deleniti"),
                GcsContentURI: sdk.String("hic"),
                Language: sdk.String("optio"),
                ReferenceWebURI: sdk.String("totam"),
                Type: shared.DocumentTypeEnumTypeUnspecified.ToPointer(),
            },
            EncodingType: shared.AnalyzeSentimentRequestEncodingTypeEnumUTF8.ToPointer(),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzeSyntaxRequest: &shared.AnalyzeSyntaxRequest{
            Document: &shared.Document{
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumBoilerplateHandlingUnspecified.ToPointer(),
                Content: sdk.String("natus"),
                GcsContentURI: sdk.String("sed"),
                Language: sdk.String("iste"),
                ReferenceWebURI: sdk.String("dolor"),
                Type: shared.DocumentTypeEnumPlainText.ToPointer(),
            },
            EncodingType: shared.AnalyzeSyntaxRequestEncodingTypeEnumUTF8.ToPointer(),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("quidem"),
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

A convenience method that provides all syntax, sentiment, entity, and classification features in one call.

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
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumBoilerplateHandlingUnspecified.ToPointer(),
                Content: sdk.String("reiciendis"),
                GcsContentURI: sdk.String("est"),
                Language: sdk.String("mollitia"),
                ReferenceWebURI: sdk.String("laborum"),
                Type: shared.DocumentTypeEnumTypeUnspecified.ToPointer(),
            },
            EncodingType: shared.AnnotateTextRequestEncodingTypeEnumNone.ToPointer(),
            Features: &shared.Features{
                ClassificationModelOptions: &shared.ClassificationModelOptions{
                    V1Model: map[string]interface{}{
                        "explicabo": "nobis",
                        "enim": "omnis",
                    },
                    V2Model: &shared.V2Model{
                        ContentCategoriesVersion: shared.V2ModelContentCategoriesVersionEnumV1.ToPointer(),
                    },
                },
                ClassifyText: sdk.Bool(false),
                ExtractDocumentSentiment: sdk.Bool(false),
                ExtractEntities: sdk.Bool(false),
                ExtractEntitySentiment: sdk.Bool(false),
                ExtractSyntax: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
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

## LanguageDocumentsClassifyText

Classifies a document into categories.

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
    res, err := s.Documents.LanguageDocumentsClassifyText(ctx, operations.LanguageDocumentsClassifyTextRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClassifyTextRequest: &shared.ClassifyTextRequest{
            ClassificationModelOptions: &shared.ClassificationModelOptions{
                V1Model: map[string]interface{}{
                    "consequuntur": "repellat",
                    "mollitia": "occaecati",
                    "numquam": "commodi",
                },
                V2Model: &shared.V2Model{
                    ContentCategoriesVersion: shared.V2ModelContentCategoriesVersionEnumV1.ToPointer(),
                },
            },
            Document: &shared.Document{
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumSkipBoilerplate.ToPointer(),
                Content: sdk.String("velit"),
                GcsContentURI: sdk.String("error"),
                Language: sdk.String("quia"),
                ReferenceWebURI: sdk.String("quis"),
                Type: shared.DocumentTypeEnumTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
    }, operations.LanguageDocumentsClassifyTextSecurity{
        Option1: &operations.LanguageDocumentsClassifyTextSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassifyTextResponse != nil {
        // handle response
    }
}
```
