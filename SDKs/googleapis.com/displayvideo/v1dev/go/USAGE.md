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
            ResourceName: "sit",
        },
        QueryParams: operations.DisplayvideoMediaDownloadQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
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