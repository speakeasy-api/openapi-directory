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
            Parent: "fuga",
        },
        QueryParams: operations.AdsenseAccountsAdclientsAdunitsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "ex",
            Alt: "json",
            Callback: "eius",
            Fields: "consequuntur",
            Key: "et",
            OauthToken: "sit",
            PrettyPrint: false,
            QuotaUser: "natus",
            UploadType: "illo",
            UploadProtocol: "impedit",
        },
        Request: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: "molestiae",
                Type: "FEED",
            },
            DisplayName: "et",
            State: "STATE_UNSPECIFIED",
        },
    }
    
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->