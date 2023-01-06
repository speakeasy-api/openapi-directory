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
            Parent: "esse",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "1",
            AccessToken: "vero",
            Alt: "proto",
            Callback: "neque",
            Fields: "ducimus",
            Key: "consectetur",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "esse",
            UploadType: "incidunt",
            UploadProtocol: "ex",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "rerum": "aut",
                "fugit": "nesciunt",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "omnis": shared.TranslateTextGlossaryConfig{
                    Glossary: "doloribus",
                    IgnoreCase: false,
                },
                "rem": shared.TranslateTextGlossaryConfig{
                    Glossary: "corporis",
                    IgnoreCase: true,
                },
                "illum": shared.TranslateTextGlossaryConfig{
                    Glossary: "magni",
                    IgnoreCase: true,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "et",
                    },
                },
            },
            Models: map[string]string{
                "quasi": "voluptates",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "quo",
                },
            },
            SourceLanguageCode: "odit",
            TargetLanguageCodes: []string{
                "aut",
                "a",
                "magni",
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