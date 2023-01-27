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
            CustomizedAttribution: "dicta",
            FormatConversions: map[string]string{
                "voluptatum": "et",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "dolorem": shared.TranslateTextGlossaryConfig{
                    Glossary: "et",
                    IgnoreCase: false,
                },
                "iste": shared.TranslateTextGlossaryConfig{
                    Glossary: "vitae",
                    IgnoreCase: true,
                },
                "dolores": shared.TranslateTextGlossaryConfig{
                    Glossary: "illum",
                    IgnoreCase: true,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "odio",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "dolore",
                    },
                },
            },
            Models: map[string]string{
                "aspernatur": "accusantium",
                "totam": "commodi",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "quis",
                },
            },
            SourceLanguageCode: "est",
            TargetLanguageCodes: []string{
                "odit",
                "non",
                "voluptas",
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