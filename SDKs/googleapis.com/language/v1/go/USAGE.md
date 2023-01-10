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
            AccessToken: "impedit",
            Alt: "json",
            Callback: "et",
            Fields: "autem",
            Key: "quasi",
            OauthToken: "sed",
            PrettyPrint: false,
            QuotaUser: "incidunt",
            UploadType: "tenetur",
            UploadProtocol: "quasi",
        },
        Request: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                Content: "animi",
                GcsContentURI: "non",
                Language: "rerum",
                Type: "PLAIN_TEXT",
            },
            EncodingType: "UTF16",
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