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
        DollarXgafv: "2",
        BatchTranslateDocumentRequest: &shared.BatchTranslateDocumentRequest{
            CustomizedAttribution: "provident",
            EnableShadowRemovalNativePdf: false,
            FormatConversions: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "deserunt": shared.TranslateTextGlossaryConfig{
                    Glossary: "suscipit",
                    IgnoreCase: false,
                },
                "iure": shared.TranslateTextGlossaryConfig{
                    Glossary: "magnam",
                    IgnoreCase: false,
                },
                "debitis": shared.TranslateTextGlossaryConfig{
                    Glossary: "ipsa",
                    IgnoreCase: false,
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "tempora",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "suscipit",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "molestiae",
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: "minus",
                    },
                },
            },
            Models: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: "veritatis",
                },
            },
            SourceLanguageCode: "deserunt",
            TargetLanguageCodes: []string{
                "ipsam",
            },
        },
        AccessToken: "repellendus",
        Alt: "proto",
        Callback: "quo",
        Fields: "odit",
        Key: "at",
        OauthToken: "at",
        Parent: "maiores",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "quod",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, req, operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->