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

    req := operations.ChatMediaDownloadRequest{
        Security: operations.ChatMediaDownloadSecurity{
            Option1: &operations.ChatMediaDownloadSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ChatMediaDownloadPathParams{
            ResourceName: "unde",
        },
        QueryParams: operations.ChatMediaDownloadQueryParams{
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
    res, err := s.Media.ChatMediaDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->