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
            Parent: "et",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "1",
            AccessToken: "deserunt",
            Alt: "media",
            Callback: "sit",
            Fields: "recusandae",
            Key: "et",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "aut",
            UploadType: "ut",
            UploadProtocol: "sed",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            FormatConversions: map[string]string{
                "iure": "ad",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "omnis": shared.TranslateTextGlossaryConfig{
                    Glossary: "nam",
                    IgnoreCase: true,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "deleniti",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "et",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "placeat",
                    },
                },
            },
            Models: map[string]string{
                "ut": "beatae",
                "perferendis": "ipsa",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "et",
                },
            },
            SourceLanguageCode: "soluta",
            TargetLanguageCodes: []string{
                "mollitia",
                "qui",
                "quasi",
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