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
    res, err := s.Documents.LanguageDocumentsAnalyzeEntities(ctx, operations.LanguageDocumentsAnalyzeEntitiesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AnalyzeEntitiesRequest: &shared.AnalyzeEntitiesRequest{
            Document: &shared.Document{
                BoilerplateHandling: shared.DocumentBoilerplateHandlingEnumSkipBoilerplate.ToPointer(),
                Content: sdk.String("distinctio"),
                GcsContentURI: sdk.String("quibusdam"),
                Language: sdk.String("unde"),
                ReferenceWebURI: sdk.String("nulla"),
                Type: shared.DocumentTypeEnumPlainText.ToPointer(),
            },
            EncodingType: shared.AnalyzeEntitiesRequestEncodingTypeEnumUtf32.ToPointer(),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.LanguageDocumentsAnalyzeEntitiesSecurity{
        Option1: &operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeEntitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->