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
    
    req := operations.TranslateProjectsLocationsBatchTranslateDocumentRequest{
        Security: operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams{
            Parent: "sit",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "debitis": "voluptatum",
                "et": "ut",
                "dolorem": "et",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "iste": shared.TranslateTextGlossaryConfig{
                    Glossary: "vitae",
                    IgnoreCase: true,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "illum",
                    },
                },
            },
            Models: map[string]string{
                "vel": "odio",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "dolore",
                },
            },
            SourceLanguageCode: "id",
            TargetLanguageCodes: []string{
                "accusantium",
            },
        },
    }
    
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->