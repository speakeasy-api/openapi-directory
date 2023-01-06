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
            ResourceName: "in",
        },
        QueryParams: operations.DisplayvideoMediaDownloadQueryParams{
            DollarXgafv: "1",
            AccessToken: "quis",
            Alt: "json",
            Callback: "ut",
            Fields: "provident",
            Key: "in",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "beatae",
            UploadType: "et",
            UploadProtocol: "sapiente",
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