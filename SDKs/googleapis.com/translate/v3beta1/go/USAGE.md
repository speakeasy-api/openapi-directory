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
            Parent: "omnis",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "1",
            AccessToken: "illum",
            Alt: "json",
            Callback: "nihil",
            Fields: "voluptatem",
            Key: "qui",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "dolore",
            UploadType: "minima",
            UploadProtocol: "sed",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "quia": "ut",
                "enim": "in",
                "dolorum": "exercitationem",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "porro": shared.TranslateTextGlossaryConfig{
                    Glossary: "omnis",
                    IgnoreCase: false,
                },
                "est": shared.TranslateTextGlossaryConfig{
                    Glossary: "voluptas",
                    IgnoreCase: true,
                },
                "cum": shared.TranslateTextGlossaryConfig{
                    Glossary: "quis",
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
                "qui": "blanditiis",
                "ut": "occaecati",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "ut",
                },
            },
            SourceLanguageCode: "soluta",
            TargetLanguageCodes: []string{
                "ut",
                "consequatur",
                "placeat",
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