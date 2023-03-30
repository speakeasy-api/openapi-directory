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
        Security: operations.LanguageDetectionsDetectSecurity{
            Option1: &operations.LanguageDetectionsDetectSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.LanguageDetectionsDetectQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            BearerToken: "quibusdam",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            Pp: false,
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.DetectLanguageRequest{
            Q: []string{
                "iure",
                "magnam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Detections.LanguageDetectionsDetect(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->