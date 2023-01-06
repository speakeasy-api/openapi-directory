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
            AccessToken: "dignissimos",
            Alt: "proto",
            Callback: "veniam",
            Fields: "voluptatum",
            Key: "pariatur",
            OauthToken: "dolores",
            PrettyPrint: true,
            QuotaUser: "velit",
            UploadType: "voluptatem",
            UploadProtocol: "dolorum",
        },
        Request: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                BoilerplateHandling: "BOILERPLATE_HANDLING_UNSPECIFIED",
                Content: "nihil",
                GcsContentURI: "facilis",
                Language: "alias",
                ReferenceWebURI: "voluptatibus",
                Type: "PLAIN_TEXT",
            },
            EncodingType: "UTF8",
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