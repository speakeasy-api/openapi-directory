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
    
    req := operations.DisplayvideoMediaDownloadRequest{
        Security: operations.DisplayvideoMediaDownloadSecurity{
            Option1: &operations.DisplayvideoMediaDownloadSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DisplayvideoMediaDownloadPathParams{
            ResourceName: "ab",
        },
        QueryParams: operations.DisplayvideoMediaDownloadQueryParams{
            DollarXgafv: "1",
            AccessToken: "quia",
            Alt: "proto",
            Callback: "ad",
            Fields: "adipisci",
            Key: "deleniti",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "omnis",
            UploadProtocol: "qui",
        },
    }
    
    res, err := s.Media.DisplayvideoMediaDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleBytestreamMedia != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->