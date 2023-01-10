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
            DollarXgafv: "2",
            AccessToken: "cum",
            Alt: "proto",
            Callback: "aut",
            Fields: "pariatur",
            Key: "voluptas",
            OauthToken: "inventore",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "rerum",
            UploadProtocol: "rerum",
        },
        Request: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                BoilerplateHandling: "BOILERPLATE_HANDLING_UNSPECIFIED",
                Content: "soluta",
                GcsContentURI: "enim",
                Language: "dolores",
                ReferenceWebURI: "eos",
                Type: "TYPE_UNSPECIFIED",
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