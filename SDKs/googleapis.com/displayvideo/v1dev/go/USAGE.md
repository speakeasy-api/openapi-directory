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
            ResourceName: "unde",
        },
        QueryParams: operations.DisplayvideoMediaDownloadQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Media.DisplayvideoMediaDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleBytestreamMedia != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->