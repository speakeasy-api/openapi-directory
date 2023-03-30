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

    req := operations.AdsenseAccountsAdclientsAdunitsCreateRequest{
        Security: operations.AdsenseAccountsAdclientsAdunitsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AdsenseAccountsAdclientsAdunitsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.AdsenseAccountsAdclientsAdunitsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: "suscipit",
                Type: "FEED",
            },
            DisplayName: "magnam",
            State: "ARCHIVED",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->