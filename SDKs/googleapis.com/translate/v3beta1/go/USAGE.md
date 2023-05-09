<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, operations.TranslateProjectsLocationsBatchTranslateDocumentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchTranslateDocumentRequest: &shared.BatchTranslateDocumentRequest{
            CustomizedAttribution: sdk.String("provident"),
            EnableShadowRemovalNativePdf: sdk.Bool(false),
            FormatConversions: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "deserunt": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("suscipit"),
                    IgnoreCase: sdk.Bool(false),
                },
                "iure": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("magnam"),
                    IgnoreCase: sdk.Bool(false),
                },
                "debitis": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("ipsa"),
                    IgnoreCase: sdk.Bool(false),
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("tempora"),
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("suscipit"),
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("molestiae"),
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("minus"),
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
                    OutputURIPrefix: sdk.String("veritatis"),
                },
            },
            SourceLanguageCode: sdk.String("deserunt"),
            TargetLanguageCodes: []string{
                "ipsam",
            },
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
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