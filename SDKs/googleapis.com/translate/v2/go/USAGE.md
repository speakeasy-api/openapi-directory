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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            BearerToken: "expedita",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            Pp: true,
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.DetectLanguageRequest{
            Q: []string{
                "voluptatum",
            },
        },
    }
    
    res, err := s.Detections.LanguageDetectionsDetect(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectionsListResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->