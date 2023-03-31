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

    req := operations.LanguageDetectionsDetectRequest{
        DollarXgafv: "2",
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Q: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: "nulla",
        Alt: "media",
        BearerToken: "illum",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        Pp: false,
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Detections.LanguageDetectionsDetect(ctx, req, operations.LanguageDetectionsDetectSecurity{
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