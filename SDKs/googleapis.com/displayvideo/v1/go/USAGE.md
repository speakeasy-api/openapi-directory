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
            AdvertiserID: "eveniet",
        },
        QueryParams: operations.DisplayvideoAdvertisersAssetsUploadQueryParams{
            DollarXgafv: "1",
            AccessToken: "in",
            Alt: "proto",
            Callback: "sit",
            Fields: "explicabo",
            Key: "illo",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "iste",
            UploadProtocol: "occaecati",
        },
        Request: []byte("voluptatem"),
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