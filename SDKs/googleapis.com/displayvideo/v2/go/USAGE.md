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
            AdvertiserID: "et",
        },
        QueryParams: operations.DisplayvideoAdvertisersAssetsUploadQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "aut",
            Fields: "asperiores",
            Key: "ea",
            OauthToken: "quam",
            PrettyPrint: true,
            QuotaUser: "consequatur",
            UploadType: "et",
            UploadProtocol: "natus",
        },
        Request: []byte("corrupti"),
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