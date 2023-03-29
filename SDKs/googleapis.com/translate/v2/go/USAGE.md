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
            AccessToken: "deserunt",
            Alt: "proto",
            BearerToken: "nulla",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            Pp: false,
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.DetectLanguageRequest{
            Q: []string{
                "iusto",
                "ullam",
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