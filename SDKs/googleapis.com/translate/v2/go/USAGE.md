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
    res, err := s.Detections.LanguageDetectionsDetect(ctx, operations.LanguageDetectionsDetectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Q: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BearerToken: sdk.String("illum"),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        Pp: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.LanguageDetectionsDetectSecurity{
        Option1: &operations.LanguageDetectionsDetectSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->