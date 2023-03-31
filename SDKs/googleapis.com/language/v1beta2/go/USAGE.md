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