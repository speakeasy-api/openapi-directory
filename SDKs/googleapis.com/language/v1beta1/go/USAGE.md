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
            AccessToken: "eligendi",
            Alt: "json",
            Callback: "sed",
            Fields: "maiores",
            Key: "non",
            OauthToken: "expedita",
            PrettyPrint: false,
            QuotaUser: "sint",
            UploadType: "quia",
            UploadProtocol: "ea",
        },
        Request: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                Content: "quia",
                GcsContentURI: "pariatur",
                Language: "aliquam",
                Type: "HTML",
            },
            EncodingType: "UTF32",
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