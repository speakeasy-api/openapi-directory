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
    
    req := operations.DisplayvideoAdvertisersAssetsUploadRequest{
        Security: operations.DisplayvideoAdvertisersAssetsUploadSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DisplayvideoAdvertisersAssetsUploadPathParams{
            AdvertiserID: "rerum",
        },
        QueryParams: operations.DisplayvideoAdvertisersAssetsUploadQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "voluptatibus",
            Fields: "quas",
            Key: "illum",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "quo",
            UploadType: "veritatis",
            UploadProtocol: "minus",
        },
        Request: []byte("recusandae"),
    }
    
    res, err := s.Advertisers.DisplayvideoAdvertisersAssetsUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->