<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.LanguageDocumentsAnalyzeEntitiesRequest{
        Security: operations.LanguageDocumentsAnalyzeEntitiesSecurity{
            Option1: &operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.LanguageDocumentsAnalyzeEntitiesQueryParams{
            DollarXgafv: "1",
            AccessToken: "non",
            Alt: "json",
            Callback: "quasi",
            Fields: "est",
            Key: "rerum",
            OauthToken: "expedita",
            PrettyPrint: false,
            QuotaUser: "distinctio",
            UploadType: "veritatis",
            UploadProtocol: "quia",
        },
        Request: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                Content: "aut",
                GcsContentURI: "sunt",
                Language: "et",
                Type: "PLAIN_TEXT",
            },
            EncodingType: "NONE",
        },
    }
    
    res, err := s.Documents.LanguageDocumentsAnalyzeEntities(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeEntitiesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->