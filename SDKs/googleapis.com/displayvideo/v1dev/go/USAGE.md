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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        QuotaUser: "illum",
        ResourceName: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Media.DisplayvideoMediaDownload(ctx, req, operations.DisplayvideoMediaDownloadSecurity{
        Option1: &operations.DisplayvideoMediaDownloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleBytestreamMedia != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->