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
            Parent: "assumenda",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "2",
            AccessToken: "cumque",
            Alt: "media",
            Callback: "assumenda",
            Fields: "voluptatem",
            Key: "harum",
            OauthToken: "natus",
            PrettyPrint: true,
            QuotaUser: "corporis",
            UploadType: "asperiores",
            UploadProtocol: "dignissimos",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "mollitia": "iste",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "a": shared.TranslateTextGlossaryConfig{
                    Glossary: "sed",
                    IgnoreCase: false,
                },
                "dignissimos": shared.TranslateTextGlossaryConfig{
                    Glossary: "doloremque",
                    IgnoreCase: true,
                },
                "quia": shared.TranslateTextGlossaryConfig{
                    Glossary: "quia",
                    IgnoreCase: true,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "occaecati",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "ullam",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "quo",
                    },
                },
            },
            Models: map[string]string{
                "quia": "et",
                "quos": "quae",
                "est": "necessitatibus",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "velit",
                },
            },
            SourceLanguageCode: "harum",
            TargetLanguageCodes: []string{
                "ipsum",
                "autem",
                "cumque",
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