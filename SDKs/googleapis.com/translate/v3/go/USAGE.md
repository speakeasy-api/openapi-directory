<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "corrupti",
        },
        QueryParams: operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BatchTranslateDocumentRequest{
            CustomizedAttribution: "suscipit",
            EnableShadowRemovalNativePdf: false,
            FormatConversions: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "suscipit": shared.TranslateTextGlossaryConfig{
                    Glossary: "molestiae",
                    IgnoreCase: false,
                },
                "minus": shared.TranslateTextGlossaryConfig{
                    Glossary: "placeat",
                    IgnoreCase: false,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "iusto",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "excepturi",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "nisi",
                    },
                },
            },
            Models: map[string]string{
                "temporibus": "ab",
                "quis": "veritatis",
                "deserunt": "perferendis",
                "ipsam": "repellendus",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "sapiente",
                },
            },
            SourceLanguageCode: "quo",
            TargetLanguageCodes: []string{
                "at",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->